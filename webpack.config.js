// 这个配置文件其实就是一个js文件，通过node中的模块操作，向外暴漏了一个配置对象

const path = require('path')
const webpack = require('webpack')
// 只要是插件都要放到plugins

const htmlWebpackPlugin=require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin'); 

module.exports={
	entry:path.join(__dirname,'./src/main.js'),//表示要使用webpack打包某个文件
	output:{
		path:path.join(__dirname,'./dist'),
		filename:'bundle.js'//指定输出的文件名称
	},
	devServer:{//这是配置dev-server命令参数的第二种形式，相对来说麻烦一些
		open:true,//自动打开浏览器
		port:3000
		,//设置启动时候的运行端口
		// contentBase:'src',
		hot:true //启用热更新
	},
	plugins:[
		new webpack.HotModuleReplacementPlugin(),
		new VueLoaderPlugin(),
		new htmlWebpackPlugin({//创建一个在内存中生成html页面的插件
			template: path.join(__dirname,'./src/index.html'),//指定模板页面，将来会根据指定的页面路径去生成内存中的页面
			filename:'index.html',//指定生成的页面的名称
		})
	],
	module:{
		rules:[
			{ test:/\.css$/,use:['style-loader','css-loader'] },//匹配处理。css文件处理的load  先处理后面的loader再处理前面的
			{ test:/\.less$/,use:['style-loader','css-loader','less-loader'] },//配置处理第三方loader规则
			{ test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
			{ test:/\.(jpg|png|gif|bmp|jpeg)$/,use:'url-loader?limit=91384&name=[hash:8]-[name].[ext]'},//limit  给定的是图片的大小单位是byte 如果我们应用的图片大于或等于给定的limit的值，则不会被转为base64格式的字符串。
			{ test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'},//处理字体文件的配置项
			{ test:/\.js$/,use:'babel-loader',exclude:/node_modules/},//处理字体文件的配置项
			{ test:/\.vue$/,use:'vue-loader'}
		]
	},
	resolve:{
		alias:{	//设置vue被导入的包的路径
			// "vue$":"vue/dist/vue.js"
		}
	}
}

// 当我们在控制台直接输出webpack命令执行的时候，webpack做了一下几步
// 首先，webpack 发现我们并没有通过命令的形式给他指定入口和出口
// webpack回去项目根路径查找 ‘webpack.config.js’的配置文件
// 当找到配置文件之后webpack回去解析执行这个配置文件，当解析执行配置文件后就得到配置文件中导出的对象
// 当webpack拿到配置对象后就拿到了配置对象中指定的入口和出口然后进行构建打包


// 使用webpack-dev-server 这个工具，来实现自动打包编译的功能
// node  nodemon   
// webpack webpack-dev-server

// 运行npm i webpack-dev-server -D把这个工具安装到项目的本地开发依赖
// 安装完毕后这个工具的用法和webpack命令的用法完全一样
// 由于 我们是在项目中本地安装的webpack-dev-server 所以无法把它当作脚本命令，在 powershell 终端中直接运行（只用那些安装到全局 -g 的工具才能在终端中正常执行）
// 注意 ：webpack-dev-server 这个工具如果想要正常运行 要求在本地项目中必须安装webpack
// webpack-dev-server 帮我们打包生成的bundle.js 并没有存放到实际的物理磁盘上，而是直接托管在电脑内存中，所以我们在项目根路径中根本找不到bundle.js
// 我们可以认为，webpack-dev-server 把打包好的文件，以一种虚拟的形式托管到了咱们项目的，根目录中，虽然我们看不到它，但是，可以认为和 dist src node_modules 平级 ，有一个看不见的文件夹叫做bundle.js
