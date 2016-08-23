import * as config from '../config'

export default `
<!DOCTYPE html>
<html lang="zh-cn">
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible"
      content="IE=edge">
<meta name="format-detection"
      content="telephone=no">
<title>Next Design</title>

<body>
<div id='react-dom'></div>
</body>

<script src='/static/dll/library.dll.js'></script>
<script src='http://localhost:${config.localWebpackPort}/bundle.js'></script>
</html>
`