(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{381:function(a,s,e){"use strict";e.r(s);var t=e(14),r=Object(t.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h3",{attrs:{id:"官网"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#官网"}},[a._v("#")]),a._v(" 官网")]),a._v(" "),s("ul",[s("li",[a._v("选择官网安装方式 "),s("a",{attrs:{href:"https://helpcenter.onlyoffice.com/installation/docs-community-install-docker.aspx",target:"_blank",rel:"noopener noreferrer"}},[a._v("点击查看"),s("OutboundLink")],1),a._v("或者跟着教程一步步来：")])]),a._v(" "),s("h3",{attrs:{id:"windows-下-docker-安装-onlyoffice"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#windows-下-docker-安装-onlyoffice"}},[a._v("#")]),a._v(" Windows 下 Docker 安装 ONLYOFFICE")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-i")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-t")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("6257")]),a._v(":80 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--restart")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("always "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"JWT_SECRET=ywjdsb"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"JWT_ENABLED=false"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" onlyoffice onlyoffice/documentserver\n")])])]),s("ul",[s("li",[a._v("如果没有安装"),s("code",[a._v("Docker")]),a._v("，请先安装"),s("code",[a._v("Docker")]),a._v("，如何安装？"),s("RouterLink",{attrs:{to:"/pages/ebb87b/"}},[a._v("点击查看安装教程")])],1),a._v(" "),s("li",[a._v("如果镜像内没有"),s("code",[a._v("ONLYOFFICE")]),a._v("，以上命令会自动拉取镜像，拉取完成后会自动启动"),s("code",[a._v("onlyoffice")]),a._v("服务。")]),a._v(" "),s("li",[a._v("默认密码为"),s("code",[a._v("ywjdsb")]),a._v("，这是框架中文档的多人协作密码，不能改。输入以下命令，如果输出"),s("code",[a._v("ywjdsb")]),a._v("，则设置成功。")]),a._v(" "),s("li",[s("code",[a._v('-e "JWT_ENABLED=false"')]),a._v("是禁用"),s("code",[a._v("ONLYOFFICE")]),a._v("的"),s("code",[a._v("token")]),a._v("验证，问就是懒得弄。")])]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exec")]),a._v(" onlyoffice /var/www/onlyoffice/documentserver/npm/json "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" /etc/onlyoffice/documentserver/local.json "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'services.CoAuthoring.secret.session.string'")]),a._v("\n")])])]),s("ul",[s("li",[a._v("启动成功后，访问 "),s("a",{attrs:{href:"http://localhost:6257",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://localhost:6257"),s("OutboundLink")],1),a._v(" 验证"),s("code",[a._v("ONLYOFFICE")]),a._v("是否正常运行。")])]),a._v(" "),s("h4",{attrs:{id:"onlyoffice-提示下载失败"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#onlyoffice-提示下载失败"}},[a._v("#")]),a._v(" ONLYOFFICE 提示下载失败")]),a._v(" "),s("ul",[s("li",[a._v("需要编辑配置文件允许私有ip通过")])]),a._v(" "),s("h5",{attrs:{id:"进入容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#进入容器"}},[a._v("#")]),a._v(" 进入容器")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exec")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-it")]),a._v(" onlyoffice "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("bash")]),a._v("\n")])])]),s("h5",{attrs:{id:"编辑default-json配置文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编辑default-json配置文件"}},[a._v("#")]),a._v(" 编辑"),s("code",[a._v("default.json")]),a._v("配置文件")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("nano")]),a._v(" /etc/onlyoffice/documentserver/default.json\n")])])]),s("h5",{attrs:{id:"修改配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修改配置"}},[a._v("#")]),a._v(" 修改配置")]),a._v(" "),s("ul",[s("li",[a._v("找到配置文件中的 "),s("code",[a._v("request-filtering-agent")]),a._v(" 部分，修改 "),s("code",[a._v("allowPrivateIPAddress")]),a._v(" 和 "),s("code",[a._v("allowMetaIPAddress")]),a._v(" 为 "),s("code",[a._v("true")]),a._v("。例如：")])]),a._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"request-filtering-agent"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"allowPrivateIPAddress"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"allowMetaIPAddress"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n")])])]),s("ul",[s("li",[a._v("修改完成后按 "),s("kbd",[a._v("Ctrl")]),a._v("+"),s("kbd",[a._v("X")]),a._v(" 保存并退出，提示输入 "),s("code",[a._v("Y")]),a._v(" 保存，接着按 "),s("kbd",[a._v("Enter")]),a._v(" 退出编辑器。")]),a._v(" "),s("li",[a._v("输入"),s("code",[a._v("exit")]),a._v("退出容器。")])]),a._v(" "),s("h5",{attrs:{id:"重启容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重启容器"}},[a._v("#")]),a._v(" 重启容器")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" restart onlyoffice\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);