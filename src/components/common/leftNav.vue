<template>
    <div class="left-nav">
        <ul>
            <!-- <li class="active"> -->
            <router-link class="active" tag="li" to="/test/awesome_pos">
                <i class="icon iconfont icon-renminbi1688"></i>
                <span>收银</span>
            </router-link>
            <!-- </li> -->
    
            <!-- <li>
                    <i class="icon iconfont icon-wxbmingxingdianpu"></i>
                    <span>店铺</span>
                </li> -->
            <router-link tag="li" to="/test/awesome_pos/shop">
                <i class="icon iconfont icon-wxbmingxingdianpu"></i>
                <span>店铺</span>
            </router-link>
            <li>
                <i class="icon iconfont icon-hanbao"></i>
                <span>商品</span>
            </li>
            <li>
                <i class="icon iconfont icon-account"></i>
                <span>会员</span>
            </li>
            <li>
                <i class="icon iconfont icon-wxbbaobiao"></i>
                <span>统计</span>
            </li>
            <li>
                <i class="icon iconfont icon-set"></i>
                <span>设置</span>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'leftNav',
    data() {
        return {

        }
    }
}
</script>
<style>
.left-nav {
    color: #fff;
    font-size: 10px;
    height: 100%;
    background-color: #1D8ce0;
    float: left;
    width: 5%;
}

.iconfont {
    font-size: 24px;
}

.left-nav ul {
    padding: 0px;
    margin: 0px;
}

.left-nav li {
    list-style: none;
    text-align: center;
    border-bottom: 1px solid #20a0ff;
    padding: 10px;
    cursor: pointer;
}

.left-nav li:hover {
    color: #74eefc;
}

.left-nav li.active {
    color: #74eefc;
    background-color: #017ad6
}

.left-nav li span {
    display: block;
}
</style>
