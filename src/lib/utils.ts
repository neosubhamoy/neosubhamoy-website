export { cn } from "cn";

export function formatCount (count: number) {
    if (count < 1000) return count;
    const sizes = ['', 'k', 'm', 'b', 't'];
    const i = Math.floor(Math.log(count) / Math.log(1000));
    return `${(count / Math.pow(1000, i)).toFixed(1)} ${sizes[i]}`;
}