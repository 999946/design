"use strict";

exports.opacity = {
    opacity: 1
};
exports.opacityEditor = {
    field: 'style.opacity',
    label: '透明度',
    editor: 'number',
    number: {
        units: [{
            key: '',
            value: '%'
        }],
        currentUnit: '',
        max: 100,
        min: 0,
        step: 1,
        inputRange: [0, 100],
        outputRange: [0, 1],
        slider: true
    },
    editable: true
};
exports.marginPadding = {
    paddingLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    marginLeft: 0,
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0
};
exports.marginPaddingEditor = {
    field: null,
    label: '',
    editor: 'marginPadding',
    editable: true
};
exports.widthHeight = {
    height: null,
    minHeight: null,
    maxHeight: null,
    width: null,
    minWidth: null,
    maxWidth: null
};
exports.widthHeightEditor = {
    field: null,
    label: '',
    editor: 'widthHeight',
    editable: true
};
exports.layout = {
    display: 'block',
    flexGrow: null,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'row',
    flexWrap: 'nowrap'
};
exports.layoutNative = {
    flex: null,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'row',
    flexWrap: 'nowrap'
};
exports.layoutEditor = {
    field: null,
    label: '',
    editor: 'layout',
    editable: true
};
exports.overflow = {
    overflow: null,
    overflowX: null,
    overflowY: null
};
exports.overflowNative = {
    overflow: 'hidden'
};
exports.overflowEditor = {
    field: null,
    label: '',
    editor: 'overflow',
    editable: true
};
exports.background = {
    background: null,
    backgroundColor: 'transparent',
    backgroundImage: null,
    backgroundPosition: null
};
exports.backgroundNative = {
    backgroundColor: 'transparent'
};
exports.backgroundEditor = {
    field: null,
    label: '',
    editor: 'background',
    editable: true
};
exports.font = {
    fontWeight: null,
    fontStyle: 'normal',
    color: null,
    fontSize: 14,
    lineHeight: null,
    textAlign: 'left',
    textDecoration: 'none',
    whiteSpace: null,
    wordWrap: 'break-word',
    wordBreak: 'normal'
};
exports.fontNative = {
    fontWeight: null,
    fontStyle: 'normal',
    color: null,
    fontSize: 14,
    lineHeight: null,
    textAlign: 'left',
    textDecorationLine: 'none'
};
exports.fontEditor = {
    field: null,
    label: '',
    editor: 'font',
    editable: true
};
exports.border = {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderLeftColor: null,
    borderBottomColor: null,
    borderRightColor: null,
    borderTopColor: null,
    borderBottomWidth: null,
    borderRightWidth: null,
    borderTopWidth: null,
    borderLeftWidth: null,
    borderLeftStyle: 'none',
    borderTopStyle: 'none',
    borderRightStyle: 'none',
    borderBottomStyle: 'none'
};
exports.borderNative = {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderColor: null,
    borderBottomWidth: null,
    borderRightWidth: null,
    borderTopWidth: null,
    borderLeftWidth: null,
    borderLeftStyle: null,
    borderTopStyle: null,
    borderRightStyle: null,
    borderBottomStyle: null
};
exports.borderEditor = {
    field: null,
    label: '',
    editor: 'border',
    editable: true
};