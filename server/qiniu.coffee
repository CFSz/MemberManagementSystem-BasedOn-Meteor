#qiniu = Meteor.npmRequire('qiniu')
#
#qiniu.conf.ACCESS_KEY = 'your access_key'
#qiniu.conf.SECRET_KEY = 'your secret_key'
#@qiniu_domain = 'your domain'
#default_bucket = 'your bucketname'
#
#@getUploadToken = (bucketname)->
#  bucketname = default_bucket unless bucketname
#  putPolicy = new qiniu.rs.PutPolicy(bucketname)
#  #putPolicy.callbackUrl = callbackUrl
#  #putPolicy.callbackBody = callbackBody
#  #putPolicy.returnUrl = returnUrl
#  #putPolicy.returnBody = returnBody
#  #putPolicy.asyncOps = asyncOps
#  #putPolicy.expires = expires
#  return putPolicy.token()