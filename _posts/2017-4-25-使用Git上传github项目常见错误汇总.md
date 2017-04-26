---
layout: post
title: 使用Git上传github项目错误汇总
category : Intro
tags : [intro, Git, tag2]
stickie: true
---

###### fatal: remote origin already exists.   

	fatal: remote origin already exists.   //表明仓库已经连接 如果需要重新连接仓库，可以进行下面操作

	1、致命错误：远程仓库已经建立。  

		解决方案：

		a、先输入$ git remote rm origin   //删除已经建立连接的仓库

		b、再输入$ git remote add origin git@github.com:账号名/项目名.git //建立仓库连接


######  ! [rejected]        master -> master (fetch first)

	! [rejected]        master -> master (fetch first) //  [拒绝]  拒绝主机提交

	问题分析：

	远程分支上存在本地分支中不存在的提交，往往是多人协作开发过程中遇到的问题，
	可以先fetch再merge，也就是pull，把远程分支上的提交合并到本地分支之后再push。

	导致原因：

	一般是不同计算机提交的引起的错误。

	解决方法：

	git push origin master -f   // 强行让本地分支覆盖远程分支

