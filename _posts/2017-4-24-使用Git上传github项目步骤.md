---
layout: post
title: 使用Git上传github项目步骤
category : Intro
tags : [intro, Git, tag2]
stickie: true
---

###### 注册github账号&&建立profile

	查看如何註冊github账号&&建立profile

###### 下载Git

	
&nbsp;&nbsp;&nbsp;&nbsp;repo link: [Git windows 32bit](https://github.com/)

&nbsp;&nbsp;&nbsp;&nbsp;repo link: [Git windows 64bit](https://github.com/)


###### 上传项目到github

	1、使用Git打开需要上传项目的文件夹

	2、ssh-keygen -t rsa -C “youremail@gmail.com”  //生成公鑰

	3、將公鑰內容粘貼到github：頭像 → setting → SSH and GPG keys → SSH keys中

	4、ssh git@github.com   //驗證公鑰是否可以正常使用

	2、git init //把这个目录变成Git可以管理的仓库

	3、git add README.md //文件添加到仓库

	4、	git add . 点代表所有文件

	5、git commit -m "first commit" //把文件提交到仓库

	6、git remote add origin git@github.com:Tower-7/test.git //关联远程仓库

	7、git push -u origin master //把本地库的所有内容推送到远程库上

	


