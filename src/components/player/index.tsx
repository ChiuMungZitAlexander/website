import {
  useRef,
  useState,
  useEffect,
  useCallback,
  RefObject,
  useMemo,
} from "react";
import {
  ActionIcon,
  Group,
  Image,
  Text,
  createStyles,
  rem,
} from "@mantine/core";
import {
  IconPlayerPlay,
  IconPlayerPause,
  IconPlayerSkipForward,
  IconPlayerSkipBack,
  IconDisc,
} from "@tabler/icons-react";
import WaveSurfer, { type WaveSurferOptions } from "wavesurfer.js";

import type { PlayList } from "../../types/playlist";

const useStyles = createStyles((theme) => ({
  container: {
    display: "flex",
    paddingTop: rem(16),
  },

  thumb: {
    marginRight: rem(8),
  },

  panel: {
    display: "flex",
    flexDirection: "column",
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
  },

  title: {
    maxWidth: "100%",
  },

  time: {
    backgroundColor: theme.colors.dark[9],
    borderRadius: "4px",
    color: theme.colors.gray[0],
    fontSize: "8px",
    paddingLeft: "2px",
    paddingRight: "2px",
    position: "absolute",
    top: "calc(60% - 12px)",
    zIndex: 9999,
  },
}));

// WaveSurfer hook
const useWavesurfer = (
  containerRef: RefObject<HTMLElement>,
  options: Omit<WaveSurferOptions, "container">
) => {
  const [wavesurfer, setWavesurfer] = useState<WaveSurfer | null>(null);

  // Initialize wavesurfer when the container mounts
  // or any of the props change
  useEffect(() => {
    if (!containerRef.current) return;

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
  playlist: PlayList;
  waveSurferOptions?: WaveSurferOptions;
};

// Create a React component that will render wavesurfer.
// Props are wavesurfer options.
const WaveSurferPlayer = ({
  playlist,
  waveSurferOptions,
}: WaveSurferPlayerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { classes, theme } = useStyles();

  const [currentSong, setCurrentSong] = useState(playlist.list[0]);

  // useMemo to prevent useWavesurfer infinite call
  const wsOptions = useMemo(
    () =>
      ({
        autoplay: false,
        barWidth: 2,
        height: "auto",
        progressColor: drawProgressGradient(),
        url: currentSong.src,
        waveColor: drawGradient(),
        ...waveSurferOptions,
      } as Omit<WaveSurferOptions, "container">),
    [waveSurferOptions, currentSong.src]
  );
  const wavesurfer = useWavesurfer(containerRef, wsOptions);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  // On play button click
  const onPlayClick = useCallback(() => {
    wavesurfer?.isPlaying() ? wavesurfer?.pause() : wavesurfer?.play();
  }, [wavesurfer]);

  // Initialize wavesurfer when the container mounts
  // or any of the props change
  useEffect(() => {
    if (!wavesurfer) return;

    setCurrentTime(0);
    setIsPlaying(false);

    const subscriptions = [
      wavesurfer.on("play", () => setIsPlaying(true)),
      wavesurfer.on("pause", () => setIsPlaying(false)),
      wavesurfer.on("timeupdate", (currentTime) => setCurrentTime(currentTime)),
    ];

    return () => {
      subscriptions.forEach((unsub) => unsub());
    };
  }, [wavesurfer]);

  return (
    <div className={classes.container}>
      <div className={classes.thumb}>
        <Image
          alt=""
          radius="lg"
          height={96}
          placeholder={<IconDisc className={classes.placeholder} size={48} />}
          src={playlist.thumb}
          width={96}
          withPlaceholder
        />
      </div>
      <div className={classes.panel}>
        <div className={classes.wavesurfer} ref={containerRef}>
          <span className={classes.time}>0:00</span>
        </div>
        <div className={classes.control}>
          <div className={classes.titleContainer}>
            <Text
              c={theme.colors.gray[5]}
              className={classes.title}
              fw={700}
              fz={rem(24)}
              truncate
            >
              {currentSong.title}
            </Text>
          </div>
          <Group style={{ flexShrink: 0 }}>
            <ActionIcon className={classes.icon} variant="transparent">
              <IconPlayerSkipBack />
            </ActionIcon>
            <ActionIcon
              className={classes.icon}
              onClick={() => onPlayClick()}
              variant="transparent"
            >
              {isPlaying ? <IconPlayerPause /> : <IconPlayerPlay />}
            </ActionIcon>
            <ActionIcon className={classes.icon} variant="transparent">
              <IconPlayerSkipForward />
            </ActionIcon>
          </Group>
        </div>
      </div>
    </div>
  );
};

export default WaveSurferPlayer;

const drawGradient = () => {
  const canvas = document.createElement("canvas");
  canvas.height = 48;
  const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

  // Define the waveform gradient
  const gradient = ctx.createLinearGradient(
    0,
    0,
    0,
    canvas.height * window.devicePixelRatio
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
  const canvas = document.createElement("canvas");
  canvas.height = 48;
  const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

  const progressGradient = ctx.createLinearGradient(
    0,
    0,
    0,
    canvas.height * window.devicePixelRatio
  );
  progressGradient.addColorStop(0, "#EE772F"); // Top color
  progressGradient.addColorStop(
    (canvas.height * 0.6) / canvas.height,
    "#EB4926"
  ); // Top color
  progressGradient.addColorStop(
    (canvas.height * 0.6 + 1) / canvas.height,
    "#ffffff"
  ); // White line
  progressGradient.addColorStop(
    (canvas.height * 0.6 + 2) / canvas.height,
    "#ffffff"
  ); // White line
  progressGradient.addColorStop(
    (canvas.height * 0.6 + 3) / canvas.height,
    "#F6B094"
  ); // Bottom color
  progressGradient.addColorStop(1, "#F6B094"); // Bottom color

  return progressGradient;
};
