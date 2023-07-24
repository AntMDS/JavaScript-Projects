function function_DisplayType(gun) {
    var gunType = gun.getAttributes("data-gun-type");
    alert(gunType + " Is of the " + gun.innerHTML + " type!");
}