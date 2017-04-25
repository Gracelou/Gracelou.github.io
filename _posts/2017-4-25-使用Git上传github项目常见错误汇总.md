---
layout: post
title: 使用Git上传github项目错误汇总
category : Intro
tags : [intro, Git, tag2]
stickie: true
---

## fatal: remote origin already exists.   

	fatal: remote origin already exists.   //表明仓库已经连接 如果需要重新连接仓库，可以进行下面操作

	1、致命错误：远程仓库已经建立。  

		解决方案：
		a、先输入$ git remote rm origin   //删除已经建立连接的仓库
		b、再输入$ git remote add origin git@github.com:账号名/项目名.git //建立仓库连接

##  ! [rejected]        master -> master (fetch first)


## 注册github账号&&建立profile

## 注册github账号&&建立profile