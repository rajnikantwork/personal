/* eslint-disable */
export const phoneRegExp = /^(\+\d{1,3}[- ]?)?\d{10}$/;
export const emailRegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
export const adharRegExp = /^[0-9]{12}$/;
export const panRegExp = /[A-Z]{5}[0-9]{4}[A-Z]{1}/;
export const tanRegExp = /[A-Z]{4}[0-9]{5}[A-Z]{1}/;
export const gstRegExp = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
export const zipRegExp = /[1-9]{1}[0-9]{2}[0-9]{3}$/;
export const phonePreventText = ["e", "E", "+", "-"];
export const space = /^\s/;
export const websiteRegex = /^((http|https):\/\/)?(www.)?(?!.*(http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+(\/)?.([\w\?[a-zA-Z-_%\/@?]+)*([^\/\w\?[a-zA-Z0-9_-]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/;
/* eslint-enable */
