##上传文件路由
#Router.route '/upload',
#  name: 'uploadImg'
#  where: 'server',
#  method: 'POST'
#  action: ->
#    this.response.write(JSON.stringify(this.request.result), 'utf8')
#    this.response.end()
#
#
#uploadFileToQiniu = (req, res, next) ->
#  formidable = Meteor.npmRequire('formidable')
#  qiniu = Meteor.npmRequire('qiniu')
#  form = new formidable.IncomingForm()
#  uploadToken = getUploadToken()
#  if req.method == 'POST'
#    form.parse(req, (err, fields, files)->
#      now = new Date()
#      saveTo = "/uploads/#{now.getTime()}-#{files.upload_file.name}"
#      qiniu.io.putFile(uploadToken, saveTo, files.upload_file.path, null, (err, ret)->
#        if (!err)
#          result =
#            msg: '上传成功， 处理返回值'
#            success: true
#            file_path: qiniu_domain + saveTo
#        else
#          result =
#            success: false
#            file_path: ''
#            msg: '上传失败'
#          console.log err
#        req.result = result
#        next()
#      )
#    )
#  else
#    next()
#  return
#
#
#Router.onBeforeAction(uploadFileToQiniu, {
#  only: ['uploadImg']
#})