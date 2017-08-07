<template>
    <div class="pos">
        <el-row>
            <el-col :span="7" class="pos-order" id="order-list">
                <el-tabs>
                    <el-tab-pane label="点餐">
                        <el-table :data="orderData" border width="100%">
                            <el-table-column prop="goodsName" label="商品"></el-table-column>
                            <el-table-column prop="count" label="数量" width="65"></el-table-column>
                            <el-table-column prop="price" label="金额" width="65"></el-table-column>
                            <el-table-column label="操作" fixed="right" width="100">
                                <template scope="scope" style="margin:0;">
                                    <el-button type="text" size="small" @click="delSingleGoods(scope.row)">删除</el-button>
                                    <el-button type="text" size="small" @click="addOrderList(scope.row)">增加</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                        <div class="total-div">
                            <span>
                                <small>总数量：</small>{{totalCount}}份</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span>
                                <small>总金额：</small>
                                <i>{{totalMoney}}</i>元</span>
                        </div>
                        <div class="order-bottom">
                            <el-button type="warning">挂单</el-button>
                            <el-button type="danger" @click="delAllGoods">删除</el-button>
                            <el-button type="success" @click="checkout">结账</el-button>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="挂单">
                        挂单
                    </el-tab-pane>
                    <el-tab-pane label="外卖">
                        外卖
                    </el-tab-pane>
                </el-tabs>
            </el-col>
            <el-col :span="17">
                <div class="hot-goods">
                    <div class="tit">最受欢迎商品</div>
                    <div class="list">
                        <ul>
                            <li v-for="goods in hotData" :key="goods.goodsId" @click="addOrderList(goods)">
                                <span>{{goods.goodsName}}</span>
                                <span>￥{{goods.price}}</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="type-goods">
                    <el-tabs>
                        <el-tab-pane label="汉堡">
                            <div class="item-list">
                                <ul>
                                    <li v-for="goods in type0GoodsData" :key="goods.goodsId" @click="addOrderList(goods)">
                                        <img :src="goods.goodsImg">
                                        <div class="goods-info">
                                            <span class="goods-name">{{goods.goodsName}}</span>
                                            <span class="goods-price">￥{{goods.price}}</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="小食">
                            <div class="item-list">
                                <ul>
                                    <li v-for="goods in type1GoodsData" :key="goods.goodsId" @click="addOrderList(goods)">
                                        <img :src="goods.goodsImg">
                                        <div class="goods-info">
                                            <span class="goods-name">{{goods.goodsName}}</span>
                                            <span class="goods-price">￥{{goods.price}}</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="饮料">
                            <div class="item-list">
                                <ul>
                                    <li v-for="goods in type2GoodsData" :key="goods.goodsId" @click="addOrderList(goods)">
                                        <img :src="goods.goodsImg">
                                        <div class="goods-info">
                                            <span class="goods-name">{{goods.goodsName}}</span>
                                            <span class="goods-price">￥{{goods.price}}</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="套餐">
                            <div class="item-list">
                                <ul>
                                    <li v-for="goods in type3GoodsData" :key="goods.goodsId" @click="addOrderList(goods)">
                                        <img :src="goods.goodsImg">
                                        <div class="goods-info">
                                            <span class="goods-name">{{goods.goodsName}}</span>
                                            <span class="goods-price">￥{{goods.price}}</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </el-tab-pane>
                    </el-tabs>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
// import $ from 'jquery'
import axios from 'axios'
export default {
    name: 'Pos',
    data() {
        return {
            orderData: [
                // {
                //     goodsName: '可口可乐',
                //     price: 8,
                //     count: 1
                // }, {
                //     goodsName: '香辣鸡腿堡',
                //     price: 15,
                //     count: 1
                // }, {
                //     goodsName: '爱心薯条',
                //     price: 8,
                //     count: 1
                // }, {
                //     goodsName: '甜筒',
                //     price: 8,
                //     count: 1
                // }
            ],
            hotData: [
                // {
                //     goodsId: 1,
                //     goodsName: '香辣鸡腿堡',
                //     price: 18
                // }, {
                //     goodsId: 2,
                //     goodsName: '田园鸡腿堡',
                //     price: 15
                // }, {
                //     goodsId: 3,
                //     goodsName: '和风汉堡',
                //     price: 15
                // }, {
                //     goodsId: 4,
                //     goodsName: '快乐全家桶',
                //     price: 80
                // }, {
                //     goodsId: 5,
                //     goodsName: '脆皮炸鸡腿',
                //     price: 10
                // }, {
                //     goodsId: 6,
                //     goodsName: '魔法鸡块',
                //     price: 20
                // }, {
                //     goodsId: 7,
                //     goodsName: '可乐大杯',
                //     price: 10
                // }, {
                //     goodsId: 8,
                //     goodsName: '雪顶咖啡',
                //     price: 18
                // }, {
                //     goodsId: 9,
                //     goodsName: '大块鸡米花',
                //     price: 15
                // }, {
                //     goodsId: 20,
                //     goodsName: '香脆鸡柳',
                //     price: 17
                // }
            ],
            type0GoodsData: [
                // {
                //     goodsId: 1,
                //     goodsImg: "http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg",
                //     goodsName: '香辣鸡腿堡',
                //     price: 18
                // }, {
                //     goodsId: 2,
                //     goodsImg: "http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",
                //     goodsName: '田园鸡腿堡',
                //     price: 15
                // }, {
                //     goodsId: 3,
                //     goodsImg: "http://7xjyw1.com1.z0.glb.clouddn.com/pos004.jpg",
                //     goodsName: '和风汉堡',
                //     price: 15
                // }, {
                //     goodsId: 4,
                //     goodsImg: "http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",
                //     goodsName: '快乐全家桶',
                //     price: 80
                // }, {
                //     goodsId: 5,
                //     goodsImg: "http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",
                //     goodsName: '脆皮炸鸡腿',
                //     price: 10
                // }, {
                //     goodsId: 6,
                //     goodsImg: "http://7xjyw1.com1.z0.glb.clouddn.com/pos004.jpg",
                //     goodsName: '魔法鸡块',
                //     price: 20
                // }, {
                //     goodsId: 7,
                //     goodsImg: "http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg",
                //     goodsName: '可乐大杯',
                //     price: 10
                // }, {
                //     goodsId: 8,
                //     goodsImg: "http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",
                //     goodsName: '雪顶咖啡',
                //     price: 18
                // }, {
                //     goodsId: 9,
                //     goodsImg: "http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",
                //     goodsName: '大块鸡米花',
                //     price: 15
                // }, {
                //     goodsId: 20,
                //     goodsImg: "http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",
                //     goodsName: '香脆鸡柳',
                //     price: 17
                // }
            ],
            type1GoodsData: [],
            type2GoodsData: [],
            type3GoodsData: [],
            totalMoney: 0,
            totalCount: 0,
        }
    },
    created: function () {
        // hotGoods
        axios.get('http://jspang.com/DemoApi/oftenGoods.php')
            .then(response => {
                var oData;
                // console.log(response)
                if (typeof response == 'string') {
                    oData = JSON.parse(response)
                    // JSON.stringify()
                } else {
                    oData = response;
                }
                this.hotData = oData.data;
            })
            .catch(error => {
                alert('网络错误，不能访问！')
            })

        // typeGoods
        axios.get('http://jspang.com/DemoApi/typeGoods.php')
            .then(response => {
                // console.log(response)
                var oData;
                if (typeof response == 'string') {
                    oData = JSON.parse(response)
                } else {
                    oData = response
                }
                this.type0GoodsData = oData.data[0]
                this.type1GoodsData = oData.data[1]
                this.type2GoodsData = oData.data[2]
                this.type3GoodsData = oData.data[3]

            })
            .catch()
    },
    mounted: function () {
        var orderHeight = document.body.clientHeight;
        // document.getElementById('order-list').style.height = orderHeight+'px';
        document.querySelector('#order-list').style.height = orderHeight + 'px';

        // document.querySelector(".type-goods .item-list").style.border = "1px solid red";
        var typeGoodsTop = document.querySelector(".type-goods").offsetTop;
        // var typeGoodsTop = $(".type-goods  .item-list").offset().top;
        // console.log(typeGoodsTop)
        document.querySelector(".type-goods .item-list").style.height = orderHeight - typeGoodsTop - 180 + 'px';
    },
    methods: {
        addOrderList(goods) {
            // 判断商品是否已经存在于菜单中
            let isHave = false;
            for (let i = 0; i < this.orderData.length; i++) {
                if (this.orderData[i].goodsId == goods.goodsId) {
                    isHave = true;
                }
            }
            // 根绝判断结果编写业务逻辑
            if (isHave) {
                // 改变列表中的商品数量
                let arr = this.orderData.filter(o => o.goodsId == goods.goodsId);
                arr[0].count++;
            } else {
                let newArr = { goodsId: goods.goodsId, goodsName: goods.goodsName, price: goods.price, count: 1 };
                this.orderData.push(newArr)
            }
            this.getAllMoney()

        },
        // 删除单个商品
        delSingleGoods(goods) {
            this.orderData = this.orderData.filter(o => o.goodsId != goods.goodsId);
            this.getAllMoney()
        },
        // 删除此次点餐
        delAllGoods() {
            this.totalCount = 0;
            this.totalMoney = 0;
            this.orderData = [];
        },
        // 模拟结账
        checkout() {
            if (this.totalCount!=0){
                this.totalCount = 0;
                this.totalMoney = 0;
                this.orderData = [];
                this.$message({
                    message: "结账成功，感谢你的努力，加油~！~",
                    type: "success"
                })
            }else{
                this.$message.error("不能空结,老板了解你急切的心情~！~")
            }

        },
        getAllMoney() {
            this.totalMoney = 0;
            this.totalCount = 0;
            if (this.orderData) {
                this.orderData.forEach(element => {
                    this.totalCount += element.count;
                    this.totalMoney += element.price * element.count;
                })
            }
        }
    }
}
</script>

<style scoped>
.pos-order {
    border-right: 1px solid #ccc;
    background-color: #f9fafc;
}

.order-bottom {
    margin-top: 15px;
}

.hot-goods .tit {
    text-align: left;
    padding: 10px;
    height: 21px;
    border-bottom: 1px solid #d1dbe5;
}

.hot-goods .list {
    padding: 10px;
}

.hot-goods .list li {
    padding: 10px;
    margin: 0 10px 10px 0;
    border: 1px solid #c0e3ed;
    float: left;
    background: #fff;
    cursor: pointer;
}

.hot-goods .list li:hover {
    background: #e9fcfc;
}

.hot-goods .list li span:first-child {
    color: #ff6600;
}

.type-goods {
    clear: both;
}

.type-goods .item-list {
    padding: 0 10px 10px 10px;
    display: block;
    width: 100%;
    float: left;
    overflow: auto;
    overflow-y: yes;
}

.type-goods .item-list li {
    width: 250px;
    float: left;
    background-color: #fff;
    cursor: pointer;
    margin: 0 10px 10px 0;
}

.type-goods .item-list li:hover {
    background-color: #e9fcfc;
}

.type-goods .item-list li span {
    display: block;
    float: left;
    clear: both;
}

.type-goods .item-list li img {
    width: 100px;
    height: 100px;
    float: left;
}

.type-goods .item-list li .goods-info {
    width: 55%;
    float: left;
    margin-left: 5%;
}

.type-goods .item-list li .goods-info .goods-name {
    color: #ff6600;
}

.total-div {
    border-bottom: 1px solid #d1dbe5;
    line-height: 40px;
}

.total-div i {
    color: #ff6d6d;
    font-style: normal;
    font-size: 1.5em;
}
</style>
