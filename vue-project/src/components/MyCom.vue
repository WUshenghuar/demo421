<script>
import adImage from '../assets/images/ad.png';
export default {
    data() {
        return {
            result: [
                {
                    id: "001",
                    itemImg: adImage, 
                    itemName: "aaa",
                    itemContent: "bbb",
                    itemPrice: "ccc"
                },
                {
                    id: "002",
                    itemImg: adImage,
                    itemName: "aaa2",
                    itemContent: "bbb2",
                    itemPrice: "ccc2"
                },
                {
                    id: "003",
                    itemImg: adImage,
                    itemName: "aaa3",
                    itemContent: "bbb3",
                    itemPrice: "ccc3"
                },
                {
                    id: "004",
                    itemImg: adImage,
                    itemName: "aaa4",
                    itemContent: "bbb4",
                    itemPrice: "ccc4"
                },
                {
                    id: "005",
                    itemImg: adImage,
                    itemName: "aaa5",
                    itemContent: "bbb5",
                    itemPrice: "ccc5"
                },
                {
                    id: "006",
                    itemImg: adImage,
                    itemName: "aaa6",
                    itemContent: "bbb6",
                    itemPrice: "ccc6"
                },
                {
                    id: "007",
                    itemImg: adImage,
                    itemName: "aaa7",
                    itemContent: "bbb7",
                    itemPrice: "ccc7"
                },
                {
                    id: "008",
                    itemImg: adImage,
                    itemName: "aaa8",
                    itemContent: "bbb8",
                    itemPrice: "ccc8"
                }
            ]
        };
    }
};
</script>

<template>
    <div class="page-main">
        <div class="left-ad">
            <img src="../assets/images/ad.webp" alt="广告图片">
        </div>
        <div class="right-list">
            <div v-for="item in result" :key="item.id" class="list-item">
                <img :src="item.itemImg" alt="商品图片"> 
                <h4>{{ item.itemName }}</h4>
                <p>{{ item.itemContent }}</p>
                <p>¥{{ item.itemPrice }}元起</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.page-main {
    width: 1240px;
    margin: 0 auto;
    display: flex;
}
.left-ad {
    width: 234px;
    height: 614px;
    /* background-color: blue; */
}
.left-ad img {
    width: 100%;
    height: auto;
}
.right-list {
    width: 992px;
    height: 614px;
    /* background-color: yellow; */
    display: flex;
    flex-wrap: wrap;
    padding-left: 14px;
    justify-content: space-between;
    align-content: space-between;
}
.list-item {
    width: 234px;
    height: 300px;
    padding: 10px;
    box-sizing: border-box;
    /* background-color: rgb(59, 63, 119); */
}
.list-item img {
    width: 100%;
    height: auto;
}
.list-item h4, p {
    text-align: center;
    margin: 0;
    padding: 0;
}
</style>