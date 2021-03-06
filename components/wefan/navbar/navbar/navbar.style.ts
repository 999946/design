export default {
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'transparent',
        height: 65,
        flex: 1
    } as React.ViewStyle,
    navBtn: {
        paddingRight: 15,
        marginLeft: 10,
        backgroundColor: 'transparent'
    } as React.ViewStyle,
    navBtnRight: {
        paddingRight: 15,
        backgroundColor: 'transparent'
    } as React.ViewStyle,
    titleText: {
        fontSize: 17,
        color: '#333',
        fontWeight: 'bold'
    },
    centerContainer: {
        flex: 1,
        width: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    } as React.ViewStyle,
    leftContainer: {
        flexDirection: 'row',
        flex: 1,
        width: 0
    } as React.ViewStyle,
    rightContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flex: 1,
        width: 0
    } as React.ViewStyle
}