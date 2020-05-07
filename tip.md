# 项目启动会打开两个页面
``
处理办法:
vue.config.js文件中devServer的open改为false
package.json里面的scripts下dev添加--open
``
# 多环境运行及打包
``
.env文件
属性名必须以VUE_APP_开头,例如:VUE_APP_XXX
ENV或者NODE_ENV代表配置的环境名

多环境配置时,添加.env.[环境名]文件
package.json文件的scripts配置打包命令
例如:"build:test": "vue-cli-service build --mode test"
vue.config.js配置打包后的文件名,设置变量
例如:const outputDir = process.env.VUE_APP_OUTPUT_DIR || 'dist' // 打包后的文件目录

``
# vue打包后的文件再github报错：Failed to load resource: the server responded with a status of 4
``
描述：没有找到静态文件
解决办法：vue.config.js文件里面的publicPath更改为'./'

``