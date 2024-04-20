
export function darkenColor(hex, percent) {
    // Remove the '#' from the beginning of the hex color string
    hex = hex.replace(/^#/, '');

    // Convert the hex color to RGB
    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);

    // Calculate the darker shade of the color
    r = Math.floor(r * (1 - percent / 100));
    g = Math.floor(g * (1 - percent / 100));
    b = Math.floor(b * (1 - percent / 100));

    // Convert the darker shade of the color back to hex
    let darkerHex = '#' + (r * 65536 + g * 256 + b).toString(16).padStart(6, '0');

    return darkerHex;
}

