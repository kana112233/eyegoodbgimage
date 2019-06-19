import defBase64 from './defBase64';
import version from './version';

/**
 * 通过配置获取样式文本
 *
 * @param {object} options 用户配置
 * @param {boolean} useFront 是否前景图
 * @returns {string}
 */
function getStyleByOptions(options: object, useFront: boolean) {
    let styleArr: string[] = [];
    for (let k in options) {
        // 在使用背景图时，排除掉 pointer-events
        if (!useFront && ~['pointer-events', 'z-index'].indexOf(k)) {
            continue;
        }

        if (options.hasOwnProperty(k)) {
            styleArr.push(`${k}:${options[k]}`);
        }
    }
    return styleArr.join(';') + ';';
}

/**
 * 生成css样式
 *
 * @export
 * @param {Array<string>} arr 图片数组
 * @param {any} [style={}] 自定义样式
 * @param {Array<any>} [styles=[]] 每个背景图的自定义样式
 * @param {boolean} [useFront=true] 是否用前景图
 * @returns
 */
export default function (arr: Array<string>, style = {}, styles = [], useFront = true) {
   // TODO 这里可以再修改为可选择的背景图片
    let [img0, img1, img2] = (arr && arr.length) ?
        [encodeURI(arr[0] || 'none'),
        encodeURI(arr[1] || 'none'),
        encodeURI(arr[2] || 'none')] : defBase64;

    let defStyle = getStyleByOptions(style, useFront); // 默认样式
    let [style0, style1, style2] = [                   // 3个子项样式
        defStyle + getStyleByOptions(styles[0], useFront),
        defStyle + getStyleByOptions(styles[1], useFront),
        defStyle + getStyleByOptions(styles[2], useFront)
    ];

    // 在前景图时使用 ::after
    let frontContent = useFront ? '::after' : '::before';

    let content = ''  // TODO 这里

    content = `

/*css-background-start*/
/*background.ver.${version}*/

[id="workbench.parts.editor"] .split-view-container${frontContent}{background-image: url('${img0}');${style0}}
[id="workbench.parts.editor"] .split-view-view .editor-container .overflow-guard>.monaco-scrollable-element>.monaco-editor-background{background: none;}

[id="workbench.parts.panel"] .split-view-container${frontContent}{background-image: url('${img1}');${style1}}
[id="workbench.panel.output"] .view-lines::after{background-image: url('${img1}');${style1}}
[id="workbench.panel.repl"] .monaco-list-rows::after{background-image: url('${img1}');${style1}}
[id="workbench.panel.markers"] .markers-panel-container::before{background-image: url('${img1}');${style1}}

[id="workbench.parts.sidebar"] .split-view-view::before{background-image: url('${img2}');${style2}}

/*css-background-end*/
`;

    return content;
}
