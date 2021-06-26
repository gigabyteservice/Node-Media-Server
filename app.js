const NodeMediaServer = require('node-media-server');

const config = {
  rtmp: {
    port: 1935,
    chunk_size: 60000,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60
  },
  http: {
    port: 8000,
    mediaroot: './media',
    allow_origin: '*',
    api: true
  },
    https: {
    port: 8443,
    key:'./privatekey.pem',
    cert:'./certificate.pem',
  },
   auth: {
    api : true,
    api_user: 'admin',
    api_pass: '9825admin',
	// play: true,
    // publish: true,
    // secret: 'liveconvos9722#'
  },
  trans: {
    ffmpeg: '/usr/bin/ffmpeg',
    tasks: [
      {
        app: 'live', // or other
        hls: true,
        // hlsFlags: '[hls_time=2:hls_list_size=3:hls_flags=delete_segments]',
		hlsFlags: '[hls_time=1:hls_list_size=3:hls_flags=delete_segments]',
        dash: true,
        dashFlags: '[f=dash:window_size=3:extra_window_size=5]',
		mp4: true,
        mp4Flags: '[movflags=frag_keyframe+empty_moov]',
        'websocket-flv': true,
      },
    ],
  },
};

var nms = new NodeMediaServer(config)
nms.run();

