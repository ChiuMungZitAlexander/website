import React from 'react'

import { Layout, Loading } from '~components'
import '~styles/music.scss'

const Music = () => {
  const [audioLoading, setAudioLoading] = React.useState(true)

  React.useEffect(() => {
    const WaveSurfer = require('wavesurfer.js')

    const wsf = WaveSurfer.create({
      barWidth: 3,
      container: '#waveform',
      cursorWidth: 0,
      height: 64,
      progressColor: '#1b4965',
      waveColor: '#62b6cb',
    })

    wsf.on('ready', () => {
      setAudioLoading(false)
    })

    wsf.load('https://wavesurfer-js.org/example/media/demo.wav')

    return () => {
      wsf.stop()
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
