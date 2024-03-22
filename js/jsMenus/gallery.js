document.addEventListener('DOMContentLoaded', function() {
    const galleryContainer = document.getElementById('gallery-container');

    galleryContainer.innerHTML = `
        <div class="gallery-header">
            <h2 class="mini-title">GALLERY</h2>
            <h1 class="main-title">OUR PORTFOLIO</h1>
            <div class="gallery-buttons">
                <button class="gallery-btn" data-gallery="home">Home</button>
                <button class="gallery-btn" data-gallery="exterior">Exterior</button>
                <button class="gallery-btn" data-gallery="interior">Interior</button>
                <button class="gallery-btn" data-gallery="designs">Designs</button>
                <button class="gallery-btn" data-gallery="all">ALL</button>
            </div>
        </div>
        <div class="gallery-box">
            <div class="gallery-images"></div>
        </div>
    `;


    const imageData = {
        home: [
            "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/433678684_1160213031637020_6939841311737865635_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=8FgC68CfQiQAX9WQDzz&_nc_ht=scontent-sea1-1.xx&oh=00_AfD4pF_kKeyOfl16xNnu0YsVAFjYDfDVZprcacMwJwVL6A&oe=6600E1D5",
            "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/433546941_1160213044970352_3357184183743258460_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=10guwBpafmwAX9Op9Fd&_nc_ht=scontent-sea1-1.xx&oh=00_AfB0TT4RUzi3-nrKAkasqVIXrLeCII7m4urqWLcCnuWzbw&oe=6600B32A",
            "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/433658946_1160213108303679_7233937689738719908_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=H_S85Tc6N0gAX8hys_j&_nc_ht=scontent-sea1-1.xx&oh=00_AfA7Q_Q5VfsrxqW6TCtnLVr4e--GM5Bt5eleEgkjkzgDuw&oe=660118C7",
            "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/434126352_1160213134970343_602847563183567181_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=cN0fgVk5Lk0AX_etOK5&_nc_ht=scontent-sea1-1.xx&oh=00_AfAmRHFeIyMCVe7ckjkH6RMSJQS9e3PUKa1rVMJ8rgAa4w&oe=6600065D",
            "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/433697682_1160213138303676_5625980917420425849_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=xDyb3pWvbl8AX8nDVUs&_nc_ht=scontent-sea1-1.xx&oh=00_AfDpqg2u5my6cPXAFsxhTzs12raBloFG60ENMcLNWdxcaA&oe=66017DC5",
            "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/433945653_1160213181637005_2067155339696708035_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=qxfd8VqHSO4AX8GNSyk&_nc_ht=scontent-sea1-1.xx&oh=00_AfBBcvtWoGkeq_8kuzziX-yDvtB2agB4e7XEcPfQEzEjhw&oe=6600A17C",
            "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/433671753_1160213228303667_8382494573684156489_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=cGmB0pfJiLgAX_Y2Qly&_nc_ht=scontent-sea1-1.xx&oh=00_AfCftv1k66AXY-wYLr4dEHDqC7oIfS3kQuKZvwPiBgy45A&oe=660187B9",
            "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/434092517_1160213218303668_6797299286549461672_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=o3po2YRSK6UAX_rTgYY&_nc_ht=scontent-sea1-1.xx&oh=00_AfD5sNdrOFLs6H-i7OEUkIQ9TI-Wc81qULXCQtj1HGThKg&oe=6601065F",
            "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/433678684_1160213031637020_6939841311737865635_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=8FgC68CfQiQAX9WQDzz&_nc_ht=scontent-sea1-1.xx&oh=00_AfD4pF_kKeyOfl16xNnu0YsVAFjYDfDVZprcacMwJwVL6A&oe=6600E1D5",
            "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/433546941_1160213044970352_3357184183743258460_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=10guwBpafmwAX9Op9Fd&_nc_ht=scontent-sea1-1.xx&oh=00_AfB0TT4RUzi3-nrKAkasqVIXrLeCII7m4urqWLcCnuWzbw&oe=6600B32A",

        ],
        exterior: [
            "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/434235752_1161197088205281_6743104305804641626_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=4ZlXY4SODD4AX9C3on8&_nc_ht=scontent-sea1-1.xx&oh=00_AfA1nJPrbLnrTvhZThz5NR_zNrSajDNUAHqvpfro1lQfJg&oe=66038D77",
            "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/434249123_1161290328195957_9111513049550117661_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=u_pm8UmI078AX9m09Kh&_nc_ht=scontent-sea1-1.xx&oh=00_AfDJdpqmg4dPRtqgTaSnFvLGJ58OzCEF1zCK8mSAtKOXPA&oe=66025545",
            "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/434063232_1161197078205282_2804766646165582975_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=8nFkn4QPXH4AX-8-XBV&_nc_ht=scontent-sea1-1.xx&oh=00_AfAWdWETOLtRaybdCqvVg80tQiNRmvcAcFs8av3L2TzdqQ&oe=6602FB80",
            "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/433842742_1161197168205273_4544659020109623045_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=BUphacr-o0sAX9mRu0l&_nc_ht=scontent-sea1-1.xx&oh=00_AfC3FES7G-sQBtnWDJZLYOVCKDYX3JEonOUcR-K8bHcxZA&oe=660364EB",
            "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/434284875_1161197198205270_3554018196136259425_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=JgpusyZYv2gAX8JVHtS&_nc_ht=scontent-sea1-1.xx&oh=00_AfBmI5t9ORhfVKuZYOVCz9uyI5FHxe2y3rBKVmuga7GIvA&oe=66035516",
            "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/434056181_1161197188205271_8000236361849769968_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=wGpXOA6vrFkAX-WKEFT&_nc_ht=scontent-sea1-1.xx&oh=00_AfDAWf5UERj7GFlA_C1TuwzVbaFj4oaoLV3WCQzyVmpaOw&oe=66022D3C",
            "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/434059027_1161197254871931_1632809627116994754_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=jWL0j8y2Te8AX_zqdN3&_nc_ht=scontent-sea1-1.xx&oh=00_AfCLtirFwQMfCc4t4z24kcfCDR5Gco7oZ_EQVPuYMkScVQ&oe=66035BB9",
            "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/434232271_1161197281538595_2205356617202783929_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=eDZyW9v61N0AX8x8LWZ&_nc_ht=scontent-sea1-1.xx&oh=00_AfAAKr1tUKqHviK89g6IwYTU6Ws9Dog0fHs_r5YzOxgH6Q&oe=6603A69F",
            "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/433738618_1161197074871949_5917562324411285464_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=o_4JN3k5eVAAX8SraCP&_nc_ht=scontent-sea1-1.xx&oh=00_AfB1WWd3ySN5f3EN9EUCTdRUUZ-hBwYedGkAn7xTxXkm4w&oe=6602B6C0",
            "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/433546941_1160213044970352_3357184183743258460_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=10guwBpafmwAX9Op9Fd&_nc_ht=scontent-sea1-1.xx&oh=00_AfB0TT4RUzi3-nrKAkasqVIXrLeCII7m4urqWLcCnuWzbw&oe=6600B32A",

        ],
        interior: [
            "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/434063174_1161203344871322_8126876429884385302_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=jy_tJLDEHk8AX-6e947&_nc_ht=scontent-sea1-1.xx&oh=00_AfBR5Fc-KCUle6n3mEu95m5bzdldZhUXbnbGt5V8YniEsg&oe=66030FEC",
            "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/434247526_1161203331537990_1225440281719058978_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=xXJAtSUVOdEAX_ZulZS&_nc_ht=scontent-sea1-1.xx&oh=00_AfBru8mYv83YAgb7yt3k9LbJw-Nd1TM3XH1LRJdWJzYMLQ&oe=66034D97",
            "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/434061841_1161203411537982_3969647136294906349_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=bMvcYegBzvkAX-kZjmm&_nc_ht=scontent-sea1-1.xx&oh=00_AfD8cGWcrqhuadjbSk-3JBMltFnkd71BW16OULAFUW0I7A&oe=66029ED8",
            "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/433738718_1161203431537980_7017737492503997876_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=0NWZTZeQgTQAX9fbIis&_nc_ht=scontent-sea1-1.xx&oh=00_AfCqMwlxEk8rrwYhKS4rC2i1tHxfg3ZGZUZu6B8WfaArBw&oe=6601EF4D",
            "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/433956055_1161203458204644_4459594028819595673_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=gb38XceP-7MAX-KNGDR&_nc_ht=scontent-sea1-1.xx&oh=00_AfB70RjNI57_DWeIAI--G8mYpRZnVBPi862xgeeuym0AVg&oe=66039642",
            "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/434232732_1161203508204639_5402539584771305211_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=wkNQ8rHuUCQAX81JVty&_nc_ht=scontent-sea1-1.xx&oh=00_AfAKFrxSvrtsDyUV7A2Cp0a0wv3louwdJVzmegFNCB3s1A&oe=6601CE5C",
            "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/434034513_1161203518204638_7945838368293687936_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=BGcw_fHWveoAX9FWPCn&_nc_ht=scontent-sea1-1.xx&oh=00_AfCJAQlzSGzHDC7d4t66aDytq7xFAuRYgG8i2Vi5JGGBuA&oe=66034AD8",
            "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/434059201_1161203544871302_8278686674904127564_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=b81bLKzkc4kAX_5xQa_&_nc_ht=scontent-sea1-1.xx&oh=00_AfDhFdlZQNH2PV_dlif0jcohPFAhV0URNcapYx4iz_Z7gQ&oe=6601ECB9",
            "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/434056099_1161203581537965_4567425541701833778_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=h5jc5doMnVwAX_Ey3wp&_nc_ht=scontent-sea1-1.xx&oh=00_AfBbbmD0U2LIfGwdaMZYVvry6DUX6Z-LFFCHBIGeihlNrQ&oe=660252B5",
            "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/434059199_1161203614871295_7910644787319555001_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=jpQGVoDuauEAX9sRPrE&_nc_ht=scontent-sea1-1.xx&oh=00_AfDHYqgeI1_hJH2hI-IJcqZbO4927nKjASavXh5auOZAgA&oe=6601E249",
            "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/434239656_1161203641537959_1649226050716250182_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=t7JQGi0Bx-0AX8B7zc7&_nc_ht=scontent-sea1-1.xx&oh=00_AfCviEAcshY0T9wLB_RyRRYP4dk6Khq369c1_CA3o5m7Kg&oe=6601F11B",
            "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/434247620_1161203668204623_6002500886348081280_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=-flULkoQTEgAX-Ccktd&_nc_ht=scontent-sea1-1.xx&oh=00_AfC5sl8SuWn6BDoAOM9EmZiWHvibiUf6431iQ2zAgDVd2Q&oe=66038B50"
        ],
        designs: [
            "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/434242962_1161289958195994_1589799310359882480_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=A9QzPiFADCoAX8r7Ek8&_nc_ht=scontent-sea1-1.xx&oh=00_AfDyc-tnAVr2-KJDHAeoB4QXhHrc46wEeJJaLOxZBhU6Zw&oe=6603C2BD",
            "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/433847714_1161289978195992_708706426805264271_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=uF-HSH5pScwAX8cyRtH&_nc_ht=scontent-sea1-1.xx&oh=00_AfChrDVfFiPBjrbDMY55Jw41P8GgCox__mXfFE-Pz09uRA&oe=6603E3EF",
            "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/434053622_1161289974862659_4327376566562612196_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=GEDYyWSCJe8AX9TOgsR&_nc_ht=scontent-sea1-1.xx&oh=00_AfBx-EyW-DnEMRsmT6-rWW81HVjdBSzb1Qo0kbWQjZzKwA&oe=6602F357",
            "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/434260972_1161290048195985_2818278804427789164_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=uAZR-5nbKYQAX-zfba_&_nc_ht=scontent-sea1-1.xx&oh=00_AfDgVbw_9f-VA7srP5IQl8ugDkRSODRyIb82smIvhYErnQ&oe=66029695",
            "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/434286603_1161290058195984_5465587901172915458_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=f-RKA0ztZDwAX8PJ7oZ&_nc_ht=scontent-sea1-1.xx&oh=00_AfBbUUqse4ftz2cWptdyrR2LzpfV_0q182Q6tzOWOQFIjA&oe=6602BE2D",
            "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/434261605_1161290074862649_4007748661344927521_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=634kshmvKbwAX9AEgAY&_nc_ht=scontent-sea1-1.xx&oh=00_AfBLagsiS0Xn4nR_EW1wFrYNyAgyxk7PPQO0piQdmik0cg&oe=6602EC50",
            "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/434294242_1161290124862644_5034771889741124756_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=1ju_8qvsdeMAX9N_iZ1&_nc_ht=scontent-sea1-1.xx&oh=00_AfCIFIQ_vdLABiNBapGk37sLQXZFRbDav8Dc6BfR2Vac5Q&oe=6602DB5B",
            "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/434267269_1161290171529306_6743686348623437393_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=uU8j8u1kP1oAX-QrQqB&_nc_ht=scontent-sea1-1.xx&oh=00_AfBTn9jd_FNfEmUxBcTriZq7emrL5xX478IgxAiMx9kMbQ&oe=6603E708",
            "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/433861651_1161290151529308_7484935164225334482_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=y3rJl3J2Re4AX95TCiH&_nc_ht=scontent-sea1-1.xx&oh=00_AfCd69-0b9cHYzwhqhe5f4G7-6ylbVQ8w4bFkVanpqZM2w&oe=6602436E",
            "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/434258600_1161290211529302_5327833647714971325_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=GkiLZgtlmpQAX_HEWfN&_nc_ht=scontent-sea1-1.xx&oh=00_AfCDwLVKXCCDu0QhstpY8BByUaSyricsYGCzqbTc1sM78Q&oe=6602BA7B",
            "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/433442494_1161290238195966_1651334697726960353_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=lXZDSdOKqhoAX8VBfWv&_nc_ht=scontent-sea1-1.xx&oh=00_AfCDV0aPj8nUIsuNb6SUEGx2pdbLTrlwx5QTFC8-sEiJ0A&oe=66029F06",
            "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/434269130_1161290258195964_1958863703941968321_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=xnnfbSmSau8AX9qji4G&_nc_ht=scontent-sea1-1.xx&oh=00_AfAITo1K4ORacfGGasO91UpTMz_BCDSaKixSRHPutTS8GQ&oe=66028EF8",
            "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/434228613_1161290294862627_674053022070193078_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=XRZaPLw-H64AX96LbBU&_nc_ht=scontent-sea1-1.xx&oh=00_AfAkZdMeUnRXr_B6B3WojLOL9xX_PET7NX8Gdsi563M5Gw&oe=66025DBF",
            "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/434249123_1161290328195957_9111513049550117661_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=u_pm8UmI078AX9m09Kh&_nc_ht=scontent-sea1-1.xx&oh=00_AfDJdpqmg4dPRtqgTaSnFvLGJ58OzCEF1zCK8mSAtKOXPA&oe=66025545",
        ],
       
    };

    // Función para mezclar y seleccionar imágenes
// Función para mezclar y seleccionar imágenes únicas
function selectUniqueImages(imageArrays, countPerCategory) {
    let selectedImages = [];
    imageArrays.forEach(images => {
        // Mezcla el array de imágenes
        const shuffled = images.sort(() => 0.5 - Math.random());
        // Selecciona imágenes hasta alcanzar el conteo deseado sin repetir
        const selectedForCategory = shuffled.slice(0, countPerCategory);
        selectedImages = [...selectedImages, ...selectedForCategory];
    });
    return selectedImages;
}

// Arrays de imágenes por categoría
const categories = [imageData.home, imageData.exterior, imageData.interior, imageData.designs];

// Selecciona un número específico de imágenes de cada categoría sin repetir
const allImages = selectUniqueImages(categories, 4); // Ajusta el '4' según necesites para equilibrar la distribución

// Asegura que la selección final tenga exactamente 18 imágenes, ajustando según sea necesario
imageData.all = allImages.slice(0, 18);

console.log(imageData.all);



    // Función para cambiar las imágenes según el botón seleccionado
    // Función modificada para cambiar imágenes con transición suave
function changeImages(category) {
    const galleryImages = document.querySelector('.gallery-images');
    const existingImages = galleryImages.querySelectorAll('img');

    // Primero, anima la salida de las imágenes existentes
    existingImages.forEach(img => {
        img.style.opacity = '0';
    });

    // Espera a que termine la animación de salida
    setTimeout(() => {
        galleryImages.innerHTML = ''; // Limpia el contenedor de imágenes después de la animación

        // Carga las nuevas imágenes con animación de entrada
        imageData[category].forEach((imageUrl, index) => {
            const imageElement = document.createElement('img');
            imageElement.src = imageUrl;
            imageElement.alt = `Image for ${category}`;
            imageElement.style.transitionDelay = `${index * 100}ms`;

            galleryImages.appendChild(imageElement);

            setTimeout(() => {
                imageElement.classList.add('image-visible');
            }, 100);
        });
    }, 1000); // Asegúrate de que este tiempo coincida con la duración de la transición CSS
}


    // Event listeners para los botones
    document.querySelectorAll('.gallery-btn').forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-gallery');
            changeImages(category);
        });
    });

    // Carga inicial de todas las imágenes
    changeImages('all');
});
