import React from 'react'
import WaveSurfer from 'wavesurfer.js'

import { Layout, Loading } from '~components'
import '~styles/music.scss'

const Music = () => {
  const [audioLoading, setAudioLoading] = React.useState(true)

  React.useEffect(() => {
    const wavesurfer = WaveSurfer.create({
      barWidth: 3,
      container: '#waveform',
      cursorWidth: 0,
      height: 64,
      progressColor: '#1b4965',
      waveColor: '#62b6cb',
    })

    wavesurfer.on('ready', function () {
      setAudioLoading(false)
    })

    wavesurfer.load(
      'https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3'
    )

    return () => {
      wavesurfer.stop()
    }
  }, [])

  return (
    <Layout>
      <div className="music-container">
        <div id="waveform" />
        <Loading loading={audioLoading} />
      </div>
    </Layout>
  )
}

export default Music
