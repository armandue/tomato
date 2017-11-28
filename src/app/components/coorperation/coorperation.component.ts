import {Component, OnInit} from '@angular/core';

import './coorperation.component.less';

@Component({
    selector: 'tomato-coorperation',
    template: require('./coorperation.component.html')
})
export class CoorperationComponent implements OnInit {
    certificates: any[];
    selectedCertificate: any;

    ngOnInit() {
        this.certificates = [
            {
                title: '公司简介',
                imageSrc: require('../../images/introduction.png'),
                imageSmSrc: require('../../images/introduction.sm.jpg')
            }, {
                title: '营业执照',
                imageSrc: require('../../images/trademark.png'),
                imageSmSrc: require('../../images/trademark.sm.png')
            }, {
                title: '注册商标',
                imageSrc: require('../../images/license.png'),
                imageSmSrc: require('../../images/license.sm.png')
            }, {
                title: '诚信公司',
                imageSrc: require('../../images/integrity.jpg'),
                imageSmSrc: require('../../images/integrity.sm.jpg')
            }, {
                title: '立信单位',
                imageSrc: require('../../images/integrity-certificate.jpg'),
                imageSmSrc: require('../../images/integrity-certificate.sm.jpg')
            }
        ];

        this.selectedCertificate = this.certificates[0];
    }

    selectCertificate(certificate: any) {
        this.selectedCertificate = certificate;
    }
}
