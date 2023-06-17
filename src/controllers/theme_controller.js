const  themeController = {
    bgColor: undefined,
    glassEffect: 0,
    borderColor: '#fff',
    textColor: '#fff',

    change_bgColor: function (value) {
        this.bgColor = value;
        console.log(this.change_bgColor.name);
    },
    change_borderColor: function (value) {
        this.borderColor = value;
    },
    change_textColor: function (value) {
        this.textColor = value;
    },
    change_glassEffect: function (value) {
        this.glassEffect = value;
    }
}
export default themeController