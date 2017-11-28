import {Component, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import * as $ from 'jquery';

import './cultivation.component.less';

@Component({
    selector: 'tomato-cultivation',
    template: require('./cultivation.component.html')
})
export class CultivationComponent implements OnInit {
    greenHouseVideos: any[];

    constructor(private sanitizer: DomSanitizer) {}

    ngOnInit() {
        this.greenHouseVideos = [
            {
                imageSrc: require('../../images/video/tomato.png'),
                title: '西红柿幼株',
                script: `我们蔬菜大棚内的西红柿。一般每年八月份定值，十月份就能收果子了。这是十月底生长情况。`,
                videoSrc: 'http://player.youku.com/embed/XMzE4Njk3MTA2NA=='
            }, {
                imageSrc: require('../../images/video/bee-1.png'),
                title: '蜜蜂辅助授粉',
                script: `授粉是果蔬生长不可缺少的环节，
                    然而大棚果蔬授粉因为缺乏授粉媒介(虫媒，风媒)的因素，
                    目前普遍采用激素蘸花的方法，以促进坐果和刺激果实膨大，
                    但这不是生物学意义上的真正授粉。`,
                videoSrc: 'http://player.youku.com/embed/XMzE4NDYxMDc3Ng=='
            }, {
                imageSrc: require('../../images/video/bee-2.png'),
                title: '蜜蜂辅助授粉',
                script: `为了提高授粉坐果率，
                    我们利用蜂类为大棚栽培果蔬授粉。
                    这是一项高效益、无污染,绿色科学的现在农业增产措施。`,
                videoSrc: 'http://player.youku.com/embed/XMzE4NDYxMjU5Mg=='
            }, {
                imageSrc: require('../../images/video/cover.png'),
                title: '揭盖草帘',
                script: `天晴时，在做好保温工作的同时，适当提早揭去保温用的草帘和延迟盖帘，可延长光照时间，增加采光量。
                一般太阳出来后0.5～1小时揭帘，太阳落山前半小时再盖帘。
                在时雨时停的阴雨天里，也要适当揭帘，以充分利用太阳的散射光。`,
                videoSrc: 'http://player.youku.com/embed/XMzE4NDYyMzg2NA=='
            }, {
                imageSrc: require('../../images/video/cover-2.png'),
                title: '草帘细节',
                script: `大量使用机械化操作，可以做到收放自如，根据具体的天气情况，迅速做出最有效的操作。`,
                videoSrc: 'http://player.youku.com/embed/XMzE4Njk3MjM2MA=='
            }, {
                imageSrc: require('../../images/video/cover-3.png'),
                title: '草帘细节',
                script: `便捷管理，可以很好的控制采光量，结合不同的季节，保证西红柿的质量。`,
                videoSrc: 'http://player.youku.com/embed/XMzE4Njk3MzQ1Mg=='
            }, {
                imageSrc: require('../../images/video/green-house.png'),
                title: '蔬菜大棚内景',
                script: `即使在冬季,蔬菜大棚依旧可以正常生产销售，不受寒冷气候的影响。
                    而且由于种植比较精细，管理比较严格，生产的蔬菜等产品品质和产量都较高，经济效益更高。`,
                videoSrc: 'http://player.youku.com/embed/XMzE4NDYwODUyOA=='
            }, {
                imageSrc: require('../../images/video/irrigation-pipe-1.png'),
                title: '浇灌管道',
                script: `我们铺设浇灌系统,可以做到精细化管理,颗颗植物浇灌充分,浇灌均匀,并节省人力物力财力,不浪费一滴水。`,
                videoSrc: 'http://player.youku.com/embed/XMzE4NDYxNTExNg=='
            }, {
                imageSrc: require('../../images/video/irrigation-pipe-2.png'),
                title: '浇灌管道',
                script: `现在都是流行使用水肥，也就是在浇灌的时候再水中加入肥料，施肥均匀，简单方便。`,
                videoSrc: 'http://player.youku.com/embed/XMzE4NDYyMjUyOA=='
            }, {
                imageSrc: require('../../images/video/pesticide-1.png'),
                title: '喷洒药剂',
                script: `科学的施用温室大棚农药不仅可以做到药到病除，还能最大限度降低作物的农药残留量，对保护消费者身体健康，提高产品竞争力具有很大作用。`,
                videoSrc: 'http://player.youku.com/embed/XMzE4NTExNDc4MA=='
            }, {
                imageSrc: require('../../images/video/pesticide-2.png'),
                title: '喷洒药剂',
                script: `科学的施用温室大棚农药不仅可以做到药到病除，还能最大限度降低作物的农药残留量，对保护消费者身体健康，提高产品竞争力具有很大作用。`,
                videoSrc: 'http://player.youku.com/embed/XMzE4NTExNjg4OA=='
            }, {
                imageSrc: require('../../images/video/sand-wash.png'),
                title: '洗沙',
                script: `我们在温室大棚内，为了进一步减少病虫害，使用无土栽培技术，每次种植都需要先进行洗沙。可以冲洗掉潜在的一些病虫害。`,
                videoSrc: 'http://player.youku.com/embed/XMzE4NTExODUwMA=='
            }
        ];
    }

    openVideo(video: any) {
        var index = this.greenHouseVideos.indexOf(video);
        var id = '#video-' + index;
        $(id).modal('toggle');
    }
}
