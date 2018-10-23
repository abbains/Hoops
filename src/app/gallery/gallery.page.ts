import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.page.html',
    styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {

    images = [
        { img: 'https://static.wixstatic.com/media/ca7d68_7b3276c8e0fe4629b20462c32ccdcd0c~mv2_d_3264_2448_s_4_2.jpg/v1/fill/w_1000,h_750,fp_0.50_0.50,q_90,usm_0.66_1.00_0.01/ca7d68_7b3276c8e0fe4629b20462c32ccdcd0c~mv2_d_3264_2448_s_4_2.webp?retry=1' },
        { img: 'https://static.wixstatic.com/media/ca7d68_dc27d9a81b674c169a1ed7eb49eee7ca~mv2_d_5760_3840_s_4_2.jpg/v1/fill/w_1000,h_667,fp_0.50_0.50,q_90,usm_0.66_1.00_0.01/ca7d68_dc27d9a81b674c169a1ed7eb49eee7ca~mv2_d_5760_3840_s_4_2.webp?retry=1' },
        { img: 'https://static.wixstatic.com/media/ca7d68_c9defb551a1a4109a3d6dd6e6200fa53~mv2_d_3264_2448_s_4_2.jpg/v1/fill/w_1000,h_750,fp_0.50_0.50,q_90,usm_0.66_1.00_0.01/ca7d68_c9defb551a1a4109a3d6dd6e6200fa53~mv2_d_3264_2448_s_4_2.webp?retry=1' },
        { img: 'https://static.wixstatic.com/media/ca7d68_799564da75c04112bae876ae056f1d39~mv2_d_2250_3000_s_2.jpg/v1/fill/w_750,h_1000,fp_0.50_0.50,q_90,usm_0.66_1.00_0.01/ca7d68_799564da75c04112bae876ae056f1d39~mv2_d_2250_3000_s_2.webp?retry=1' },
        { img: 'https://static.wixstatic.com/media/ca7d68_c9defb551a1a4109a3d6dd6e6200fa53~mv2_d_3264_2448_s_4_2.jpg/v1/fill/w_1000,h_750,fp_0.50_0.50,q_90,usm_0.66_1.00_0.01/ca7d68_c9defb551a1a4109a3d6dd6e6200fa53~mv2_d_3264_2448_s_4_2.webp?retry=1' },
        { img: 'https://static.wixstatic.com/media/ca7d68_5ed044d890814bf5841e0327c5a9c304~mv2.png/v1/fill/w_1000,h_562,fp_0.50_0.50,q_90,usm_0.66_1.00_0.01/ca7d68_5ed044d890814bf5841e0327c5a9c304~mv2.webp?retry=1' },
        { img: 'https://static.wixstatic.com/media/ca7d68_d66eb56cd5a549fab6cc8cf82312b517~mv2.png/v1/fill/w_1000,h_562,fp_0.50_0.50,q_90,usm_0.66_1.00_0.01/ca7d68_d66eb56cd5a549fab6cc8cf82312b517~mv2.webp?retry=1' },
        { img: 'https://static.wixstatic.com/media/ca7d68_7f65da6eef76499eb0eae745beeae4ea~mv2.jpg/v1/fill/w_1000,h_686,fp_0.50_0.50,q_90,usm_0.66_1.00_0.01/ca7d68_7f65da6eef76499eb0eae745beeae4ea~mv2.webp?retry=1' },
        { img: 'https://static.wixstatic.com/media/ca7d68_c3317ec005c0465884e9c80916eb6c09~mv2_d_2304_3456_s_2.jpg/v1/fill/w_750,h_1127,fp_0.50_0.50,q_90,usm_0.66_1.00_0.01/ca7d68_c3317ec005c0465884e9c80916eb6c09~mv2_d_2304_3456_s_2.webp?retry=1' },
        { img: 'https://static.wixstatic.com/media/ca7d68_cb1013d260134bc9929312b97d2d5268~mv2_d_3264_2448_s_4_2.jpg/v1/fill/w_1000,h_750,fp_0.50_0.50,q_90,usm_0.66_1.00_0.01/ca7d68_cb1013d260134bc9929312b97d2d5268~mv2_d_3264_2448_s_4_2.webp?retry=1' },
        { img: 'https://static.wixstatic.com/media/ca7d68_15c4ddc2eedb4d8d957fc483785d9b08~mv2.png/v1/fill/w_1000,h_562,fp_0.50_0.50,q_90,usm_0.66_1.00_0.01/ca7d68_15c4ddc2eedb4d8d957fc483785d9b08~mv2.webp?retry=1' },
        { img: 'https://static.wixstatic.com/media/ca7d68_80c683f61fa74167be5293c45cc70ed2~mv2_d_3264_2448_s_4_2.jpg/v1/fill/w_1000,h_750,fp_0.50_0.50,q_90,usm_0.66_1.00_0.01/ca7d68_80c683f61fa74167be5293c45cc70ed2~mv2_d_3264_2448_s_4_2.webp?retry=1' }
        ];

    constructor() {
    }

    ngOnInit() {
    }

}
