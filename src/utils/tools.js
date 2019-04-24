//工具函数
export const formatNumber = (numbers) => {
    const number = parseInt(numbers);
    const baseNum = 10000;
    const merchant = number / baseNum;
    if (number >= 100000) {
        return parseInt(merchant) + '万';
    } else {
        return number;
    }
}