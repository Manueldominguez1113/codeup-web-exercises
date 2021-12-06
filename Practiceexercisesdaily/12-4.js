function createDog(name, colors, breed) {
    return {
        breed: breed,
        colors: colors,
        sex: "f",
        name: name,
        isFloofer: true,
        bark: function (loud) {
            if (loud) {
                console.log("Woof Woof!!");
            } else {
                console.log("ruf ruf");
            }
        },
        getDetails: function () {
            return this.colors[0] + " " + this.breed + " named " + this.name;
        }
    }
}