function redirect() {
    var days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    var today = days[new Date().getDay()];
    var default_string = 'https://mit-bhalodi.github.io/time-table/'
    var new_string = default_string + today + '.html'
    window.location.replace(new_string);
}