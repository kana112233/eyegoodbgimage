# eye good and background image

护眼模式

## Add a lovely background-image to your vscode.

## Config 配置项

| Name                      |      Type       | Description                                                                                 |
| :------------------------ | :-------------: | :------------------------------------------------------------------------------------------ |
| `background.enabled`      |    `Boolean`    | 插件是否启用 <br> If background enabled.                                                    |
| `background.useDefault`   |    `Boolean`    | 是否使用默认图片 <br> If use default images.                                                |
| `background.customImages` | `Array<String>` | 自定义图片，最多 3 个<br> Your Your custom Images(Max length is 3)                          |
| `background.style`        |    `Object`     | 自定义样式 <br> Custom style                                                                |
| `background.styles`       | `Array<Object>` | 每个图片的独立样式 <br> Style of each image.                                                |
| `background.useFront`     |    `Boolean`    | 前景图/背景图。 在代码上面还是下面 <br> `true`:On the top of code. `false`: Behind the code |

## Notice 提示

**http** 协议的外链图片在当前版本不能使用(vscode 限制)，需要用 **https** 协议开头的外链地址。

You should use protocol **https** instead of **http** to the image,which is not support by vscode now.

## Uninstall 卸载

   1 Set the config  {"background.enabled": false}  in settings.json,then uninstall the plugin.
    在 settings.json 中设置 {"background.enabled": false} ，然后再删除插件。如果直接删除插件会有遗留，就需要重装vscode了。
   2 如果还是删除不掉背景图片，就到项目安装目录下找到Microsoft VS Code\resources\app\out\vs\workbench\workbench.main.css 文件
   把下面这些删掉
 /*css-background-start*/
/*background.ver.1.0.1*/
[id="workbench.parts.editor"] 太长省略一大片
[id="workbench.parts.editor"] 太长省略一大片
[id="workbench.parts.editor"] 太长省略一大片

[id="workbench.parts.editor"] .split-view-view .editor-container  .overflow-guard>.monaco-scrollable-element>.monaco-editor-background{background: none;}

/*css-background-end*/

### Q&A 常见问题:

---

    Q:It seems that nothing happens after installing the extension?
    Q:安装完插件后，似乎没有反应？

    A:Make sure to have the administrator authority！！
    A:如果不能使用，请确保你有管理员权限！！

---

    Q:How to get the administrator authority?
    Q:怎么获取管理员权限呢？ =。=

    A:In windows,click right button on the vscode's icon,then check the [run with the administrator authority].
    A:在windows环境中，可以右键单击vscode的图标，选择【以管理员身份运行】。

---

Press F1,and you can get it by enter **ext install background** in your vscode. (～￣ ▽ ￣)～
<br />
<br />
你可以在 vscode 中，按下 F1，然后输入 **ext install background** 来下载她 (～￣ ▽ ￣)～

---

### 开发
npm install

vsce craate-publisher eyegoodbgimage


vsce publish

vsce publish patch

如果上面两个不能部署，则手动部署
vsce package
用插件项目管理上传生成的eyegoodbgimage-x.y.z.vsix文件


**Enjoy!**
