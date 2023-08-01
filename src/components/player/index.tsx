import React, {
  useRef,
  useState,
  useEffect,
  useCallback,
  RefObject,
} from "react";
import {
  ActionIcon,
  Badge,
  Group,
  Image,
  Text,
  createStyles,
  keyframes,
  rem,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconPlayerPlay, IconPlayerPause } from "@tabler/icons-react";
import WaveSurfer from "wavesurfer.js";
import Marquee from "react-fast-marquee";

import type { WaveSurferOptions } from "wavesurfer.js";
import type { Song } from "@/types/album";

const rotate = keyframes({
  from: { transform: "rotate(0deg)" },
  to: { transform: "rotate(360deg)" },
});

const useStyles = createStyles((theme) => ({
  container: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : "#fff",
    display: "flex",
    padding: rem(16),
    transition: "transform .3s ease-out",
    transform: "translateY(0px)",
  },

  containerHidden: {
    transform: "translateY(140px)",
  },

  thumb: {
    marginRight: rem(8),
    position: "relative",
  },

  panel: {
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    width: "100%",
  },

  wavesurfer: {
    height: rem(48),
    position: "relative",
  },

  control: {
    alignItems: "center",
    display: "flex",
    flexGrow: 1,
    justifyContent: "space-between",
  },

  playIconContainer: {
    left: "50%",
    position: "absolute",
    top: "50%",
    transform: "translate(-50%,-50%)",
  },

  icon: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],

    "&:hover": {
      color:
        theme.colorScheme === "dark"
          ? theme.colors.dark[2]
          : theme.colors.gray[9],
    },
  },

  placeholder: {
    color: "gray",
    opacity: 0.65,
  },

  titleContainer: {
    flexGrow: 1,
    overflow: "hidden",
    paddingRight: rem(8),
  },

  title: {
    maxWidth: "100%",
  },

  time: {
    backgroundColor: theme.colors.dark[9],
    borderRadius: "4px",
    color: theme.colors.gray[0],
    fontSize: "8px",
    left: "4px",
    paddingLeft: "2px",
    paddingRight: "2px",
    position: "absolute",
    top: "calc(60% - 12px)",
    zIndex: 9999,
  },

  duration: {
    backgroundColor: theme.colors.dark[9],
    borderRadius: "4px",
    color: theme.colors.gray[0],
    fontSize: "8px",
    paddingLeft: "2px",
    paddingRight: "2px",
    position: "absolute",
    right: "4px",
    top: "calc(60% - 12px)",
    zIndex: 9999,
  },

  albumThumbnail: {
    animation: `${rotate} 16s linear infinite`,

    "&.paused": {
      animationPlayState: "paused",
    },
  },
}));

// WaveSurfer hook
const useWavesurfer = (
  containerRef: RefObject<HTMLElement>,
  options?: Omit<WaveSurferOptions, "container">,
) => {
  const [wavesurfer, setWavesurfer] = useState<WaveSurfer | null>(null);

  // Initialize wavesurfer when the container mounts
  // or any of the props change
  useEffect(() => {
    if (!containerRef.current || !options) return;

    const ws = WaveSurfer.create({
      ...options,
      container: containerRef.current,
    });

    setWavesurfer(ws);

    return () => {
      ws.destroy();
    };
  }, [options, containerRef]);

  return wavesurfer;
};

type WaveSurferPlayerProps = {
  thumbnail: string;
  song: Song | null;
  waveSurferOptions?: WaveSurferOptions;
};

// Create a React component that will render wavesurfer.
// Props are wavesurfer options.
const WaveSurferPlayer = ({
  thumbnail,
  song,
  waveSurferOptions,
}: WaveSurferPlayerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const isMobile = useMediaQuery("(max-width: 48em)");
  const { classes, theme, cx } = useStyles();

  const [wsOptions, setWsOptions] = useState<
    Omit<WaveSurferOptions, "container"> | undefined
  >(undefined);

  useEffect(() => {
    setWsOptions({
      autoplay: false,
      barWidth: 2,
      height: "auto",
      progressColor: drawProgressGradient(),
      url: song ? `${process.env.GATSBY_CDN_URL}${song.src_path}` : "",
      waveColor: drawGradient(),
      ...waveSurferOptions,
    });
  }, [song, waveSurferOptions]);

  const wavesurfer = useWavesurfer(containerRef, wsOptions);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // On play button click
  const onPlayClick = useCallback(() => {
    if (!song?.src_path) return;

    wavesurfer?.isPlaying() ? wavesurfer?.pause() : wavesurfer?.play();
  }, [wavesurfer]);

  // Initialize wavesurfer when the container mounts
  // or any of the props change
  useEffect(() => {
    if (!wavesurfer) return;

    setCurrentTime(0);
    setIsPlaying(false);

    const subscriptions = [
      wavesurfer.on("decode", (duration) => setDuration(duration)),
      wavesurfer.on("play", () => setIsPlaying(true)),
      wavesurfer.on("pause", () => setIsPlaying(false)),
      wavesurfer.on("timeupdate", (currentTime) => setCurrentTime(currentTime)),
      wavesurfer.on("ready", () => wavesurfer?.play()),
    ];

    return () => {
      subscriptions.forEach((unsub) => unsub());
    };
  }, [wavesurfer]);

  return (
    <div className={cx(classes.container, !song && classes.containerHidden)}>
      <div className={classes.thumb} onClick={() => onPlayClick()}>
        <Image
          alt=""
          className={cx(classes.albumThumbnail, !isPlaying && "paused")}
          height={96}
          radius="50%"
          src={thumbnail}
          width={96}
        />
        <div className={classes.playIconContainer}>
          <ActionIcon className={classes.icon} size="3xl" variant="transparent">
            {isPlaying ? (
              <IconPlayerPause size="3rem" />
            ) : (
              <IconPlayerPlay size="3rem" />
            )}
          </ActionIcon>
        </div>
      </div>
      <div className={classes.panel}>
        <div className={classes.wavesurfer} ref={containerRef}>
          <span className={classes.time}>{formatTime(currentTime)}</span>
          <span className={classes.duration}>{formatTime(duration)}</span>
        </div>
        <div className={classes.control}>
          <div className={classes.titleContainer} id="marquee-container">
            {isMobile ? (
              <Marquee speed={20}>
                <Text
                  c={theme.colors.gray[5]}
                  className={classes.title}
                  fw={700}
                  fz={rem(24)}
                  truncate
                >
                  {song?.name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </Text>
              </Marquee>
            ) : (
              <Text
                c={theme.colors.gray[5]}
                className={classes.title}
                fw={700}
                fz={rem(24)}
                truncate
              >
                {song?.name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </Text>
            )}
          </div>
          <Group style={{ flexShrink: 0 }}>
            <Badge color="gray" variant="light">
              {wavesurfer?.getDecodedData()?.sampleRate || "-"} Hz
            </Badge>
          </Group>
        </div>
      </div>
    </div>
  );
};

export default WaveSurferPlayer;

const drawGradient = () => {
  if (!document) return;

  const canvas = document.createElement("canvas");
  canvas.height = 48;
  const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

  // Define the waveform gradient
  const gradient = ctx.createLinearGradient(
    0,
    0,
    0,
    canvas.height * window.devicePixelRatio,
  );
  gradient.addColorStop(0, "#656666"); // Top color
  gradient.addColorStop((canvas.height * 0.6) / canvas.height, "#656666"); // Top color
  gradient.addColorStop((canvas.height * 0.6 + 1) / canvas.height, "#ffffff"); // White line
  gradient.addColorStop((canvas.height * 0.6 + 2) / canvas.height, "#ffffff"); // White line
  gradient.addColorStop((canvas.height * 0.6 + 3) / canvas.height, "#B1B1B1"); // Bottom color
  gradient.addColorStop(1, "#B1B1B1"); // Bottom color

  return gradient;
};

const drawProgressGradient = () => {
  if (!document) return;

  const canvas = document.createElement("canvas");
  canvas.height = 48;
  const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

  const progressGradient = ctx.createLinearGradient(
    0,
    0,
    0,
    canvas.height * window.devicePixelRatio,
  );
  progressGradient.addColorStop(0, "#228BE6"); // Top color
  progressGradient.addColorStop(
    (canvas.height * 0.6) / canvas.height,
    "#339AF0",
  ); // Top color
  progressGradient.addColorStop(
    (canvas.height * 0.6 + 1) / canvas.height,
    "#ffffff",
  ); // White line
  progressGradient.addColorStop(
    (canvas.height * 0.6 + 2) / canvas.height,
    "#ffffff",
  ); // White line
  progressGradient.addColorStop(
    (canvas.height * 0.6 + 3) / canvas.height,
    "#A5D8FF",
  ); // Bottom color
  progressGradient.addColorStop(1, "#A5D8FF"); // Bottom color

  return progressGradient;
};

const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const secondsRemainder = Math.round(seconds) % 60;
  const paddedSeconds = `0${secondsRemainder}`.slice(-2);
  return `${minutes}:${paddedSeconds}`;
};
