// src/lazyload.js
import { lazy } from 'react';

export function lazyLoad(path, namedExport) {
    return lazy(() => {
        console.log('Attempting to import:', path);
        const promise = import(/* webpackChunkName: "[request]" */ `${path}`)
            .then(module => {
                console.log('Module loaded:', module);
                return module;
            })
            .catch(err => {
                console.error('Error loading module:', err);
                throw err;
            });

        if (namedExport == null) {
            return promise;
        } else {
            return promise.then(module => ({
                default: module[namedExport],
            }));
        }
    });
}
