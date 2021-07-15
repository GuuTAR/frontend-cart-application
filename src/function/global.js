import {NativeModules} from 'react-native';
const RNFetchBlob = NativeModules.RNFetchBlob;

export const isnull = (value) => value === null
export const isUndefined = (value) => value === undefined
export const isEmptyString = (value) => value === ''
export const isSomeInvalidValue = (value) => isnull(value) || isUndefined(value) || isEmptyString(value)

export const readmoreCutter = (text, useLength = 95, readmoreText = '...อ่านเพิ่มเติม') =>
    text.length > useLength ? text.slice(0, useLength) + readmoreText : text

export const getTotalPrice = (data) => data.reduce((a, b) => a + b.price * b.count, 0)

export const downloadFileToGallary = (name, url) => {
    const { config, fs } = RNFetchBlob;
    let PictureDir = fs.dirs.PictureDir;
    let options = {
        fileCache: true,
        overwrite: true,
        addAndroidDownloads: {
            useDownloadManager: true,
            notification: true,
            title : `Cart App : downloading ${name}...`,
            description: 'Cart App',
            path: `${PictureDir}/cart-app/${name}`,
        }
    };
    config(options)
        .fetch('GET', url)
        .then(res => {
            if (res.data) {
                alert('Download file successfully!');
            } else {
                alert('Download file failed..');
            }
        });
}