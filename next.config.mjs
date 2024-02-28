function getFunctionBodyScript(func) {
    let value = func.toString();

    value = value.substring(value.indexOf("{") + 1, value.lastIndexOf("}"));
    value = value.trim();

    return value;
}

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: function (config, context) {
        if (context.isServer) {
            config.externals.push({
                '@yandex/ymaps3-types': `promise ${getFunctionBodyScript(function test() {
                    throw new Error('Cannot load Yandex maps on server side');
                })}`
            });
        } else {
            config.externals.push({
                '@yandex/ymaps3-types': `promise ${getFunctionBodyScript(function test() {
                    new Promise((resolve) => {
                        if (typeof ymaps3 !== 'undefined') {
                            return ymaps3.ready.then(() => resolve(ymaps3));
                        }

                        const script = document.createElement('script');
                        script.src = "https://api-maps.yandex.ru/v3/?apikey=b787d8a0-fd6d-4b9c-9301-5fc2a461b9e7&lang=ru_RU";
                        script.onload = () => {
                            ymaps3.ready.then(() => resolve(ymaps3));
                        };

                        document.head.appendChild(script);
                    })
                })}`
            });
        }

        

        return config;
    },
};

export default nextConfig;
