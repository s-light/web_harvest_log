<template>
    <q-page
        class="flex column"
        style="align-items: center;"
    >
        <section>
            <h4>Web Harvest Log</h4>
            <p>
                version: v{{ version }}
            </p>
            <p>
                local web based ui for tracking harvest weights.<br>
                find the project repository at <br>
                <a
                    target="_blank"
                    :href="projectUrl"
                >
                    {{ projectUrl }}
                </a>
            </p>
        </section>
        <section>
            <h4>Fonts</h4>
            <p>
                list of extra fonts.<br>
                you can find the original packages in the src/css/fonts directory.
            </p>
            <div>
                <h5>Titillium</h5>
                <p>
                    Copyright (c) 2008-2010, Accademia di Belle Arti di Urbino <br>
                    (www.campivisivi.net | direzione@accademiadiurbino.it), <br>
                    with Reserved Font Name Titillium.<br>
                    This Font Software is licensed under the SIL Open Font License, Version 1.1.
                </p>
                <a
                    target="_blank"
                    href="https://web.archive.org/web/20140704185823/http://www.campivisivi.net/titillium/"
                >
                    Source
                </a>
            </div>
            <div>
                <h5>Ruji's Handwriting Font v.2.0</h5>
                <p>
                    Created by Ruji Chapnik (http://rujic.net) with the Open Font License. <br>
                    For more info on Ruji's art/software projects and more,
                    visit <a
                        target="_blank"
                        href="http://rujic.net"
                    >
                        http://rujic.net
                    </a>
                </p>
                <a
                    target="_blank"
                    href="https://fontlibrary.org/en/font/ruji-s-handwriting-font-v-2-0"
                >
                    Source
                </a>
            </div>
            <div>
                <h5>Overpass</h5>
                <p>
                    Copyright 2016 Red Hat, Inc.,<br>
                    This Font Software is dual licensed under the <br>
                    SIL Open Font License and the GNU Lesser General Public License,<br>
                    LGPL 2.1 : http://www.gnu.org/licenses/old-licenses/lgpl-2.1.en.html <br>
                    OFL  1.1  : http://scripts.sil.org/OFL <br>
                </p>
                <a
                    target="_blank"
                    href="http://overpassfont.org/"
                >
                    Source
                </a>
            </div>
        </section>
    </q-page>
</template>

<style lang="stylus">
</style>

<script>
import { version } from '../../package.json'

export default {
    name: 'About',
    data () {
        return {
            version: version,
            projectUrl: 'https://github.com/s-light/quasar_with_featherjs/'
        }
    }
}
</script>
