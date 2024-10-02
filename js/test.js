const setTimeConvert = (time) => {
    const hour = parseInt(time / 3600);
    let remainingSecond = time % 3600;
    const minute = parseInt(remainingSecond / 60);
    remainingSecond = remainingSecond % 60;
    return `${hour} Hours ${minute} minute ${remainingSecond} second ago`
}

const relative = setTimeConvert(7865)
console.log(relative);
