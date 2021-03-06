import styles from "../styles/Home.module.css" ;"../styles/globals.css";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [state, setState] = useState({
    list: [],
  });

  useEffect(() => {
    fetch("/api/news").then(async (res) => {
      const resp = await res.json();
      setState({
        list: resp.data,
      });
    });
  }, []);

  return (
    <div className={styles.container}>
    
      <div id="root">
        <div class="home-container">
            <div class="toutiao-header">
                <div class="topbar">
                    <div class="home-left-nav"><a class="download-app tb-link" href="//app.toutiao.com/news_article/" target="_blank" rel="noopener noreferrer">下载APP</a><a class="register-mp tb-link" href="//mp.toutiao.com" target="_blank" rel="noopener noreferrer">注册头条号</a>
                        <div class="weather-tool">
                            <div class="weather-abstract"><span> </span><span class="city_state"></span><span class="city_temperature"><em>0</em>℃ / <em>0</em>℃</span><i class="bui-icon icon-arrow_down"></i></div>
                        </div>
                    </div>
                    <div></div>
                    <div class="right-nav">
                        <ul class="user-nav-list">
                            <li class="tb-item"><a class="tb-link" target="_blank" rel="noopener noreferrer" href="//mp.toutiao.com/profile_v3_public/public/complains">侵权投诉</a></li>
                            <li class="tb-item more"><a class="tb-link" href="//www.toutiao.com/about/">头条产品</a>
                                <div class="layer">
                                    <ul>
                                        <li><a href="https://www.wukong.com" class="layer-item" target="_blank" rel="noopener noreferrer">问答</a></li>
                                        <li><a href="https://www.baike.com/" class="layer-item" target="_blank" rel="noopener noreferrer">头条百科</a></li>
                                        <li><a href="https://mp.toutiao.com/" class="layer-item" target="_blank" rel="noopener noreferrer">头条号</a></li>
                                        <li><a href="https://tuchong.com?utm_source=toutiao&amp;utm_medium=pc_header" class="layer-item" target="_blank" rel="noopener noreferrer">图虫</a></li>
                                        <li><a href="https://stock.tuchong.com/?source=ttweb" class="layer-item" target="_blank" rel="noopener noreferrer">正版图库</a></li>
                                        <li><a href="https://www.oceanengine.com/?source=pchometop" class="layer-item" target="_blank" rel="noopener noreferrer">广告投放</a></li>
                                        <li><a href="https://www.dcdapp.com/?zt=tt_pc_home_top_bar" class="layer-item" target="_blank" rel="noopener noreferrer">懂车帝</a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="main-content">
                <div class="channel-container">
                    <div class="channel">
                        <a class="logo" href="/"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANgAAAA2CAMAAACSsKctAAAANlBMVEVHcEzuQEDwRETyRUX3TEzvQkLuQEDuQUHuQUHvQEDuQUHuQEDvQkLuQEDuQUHwQUHxQkLtQEDKaksGAAAAEXRSTlMAxiweDlyo49Nri/F5+bhLOapXaIgAAATMSURBVGje7ZrpsqQqDIAb2VEE3/9lx263AAmu3XVv1cn8mFOtIh+JIQuvFyFSzdK8/jsSrbg7BG+HSdjPZi3iJPTchR7a7iYam7mGNvwKTM5vlOQd6n3Z37IhN6zSNhW1TsJqMt/TwQk6G3gxmt0DC5/LfpxS9U38wOJ9RJN38uG4KGBR0wRNxrcHtn4dlPjpv4pCYzqEEffBfAG2XDC9sxyCUbbfH3wVDdbkS2P4FzQGRR4As8NdsEYXy01Y4xMa28C6KljT3gUDXNtYOn5fY3UwNtwEA9+XA397+zONxR03fQ1MerjG0Is4QYK5riLzEMDdC4+CuQoY99sKoW9R20z5zsKwN0gAczDFUohdPzSKRpw4j9Yp0+Jg2GgCrHBf3sAVuIytC8u4RjIwYmGOh8AMvTutfLtgydR8ZjzCgeV32M7eFlyZj2T8GY3lfHwNmChTGmcP5tECNNFBf4m4AqEGhGt8rYEj2i+AwUhwFCocgOs+ok383MFfMecdoGYUHFwkW76Jz5kiHlmQ4TtPY48+iNAnfqgX1a+vtNMueXyjvqox5WTkJFgthq3t0i2ydhY+4MsbYhKMtEu6dxFseqw1Gd+s2raasylPRgCluoJJgnnU3SYaHbS8Y4rJBv3h42AFdN1gGzwWZtgcMHD3Xk5BfYOz67qlsWKDnq3G1DP74DTCZVwQVbA1X57WpWWqk40od4svgInKBrtUPJSpfGPGyYYC6zma/OjJm0RzBcwcBONltAzKIVYxfyBObJlbFAHAtKSyOla4x+c1FiuhAxvOiDcpWBKo4GDbp3sLDA2CJR07EGCaUZYJwUys5OGgBhdYCRYFIWQQHKzrjU/AXCUdQ8C0e0+Y295XwbSsFhiS4qLUC9hePsZ2QqqVT4I3NvtgvrfbXQLxkwsYUoWsgI37uX4GbOXj231+J332DPHsXKb+cknCkC2gkZ1iLQE2RtRPgiVJq6mAadVtUKL5CAea69v9qGxxs/KTMLFrVaozYLLi7UcwrVxWY3XYtjfu32q07cOF/Ob7YKpWLm0Emewj+7m43Ud5EGzdAvjJKnz/jTbCg2B2OBIpXgBzZl9a/xFdhBChwYWXYIEYe1GYzn6fHlPIE3rJDhBBTPxIPHYng5bDObEXQqrEK34PTP+B/c/A/kzxD+wUWLB1AXVJd8cUm3Jkv1W/SpmGlsiVOUw32GxPbMVbZtA9WwneGjo+Xun/34s8hEGLqQ+AgUaVff0cDHCpJ7stSZvKTVW//vNPoXVuNV3rVQ7WVR+juRjRfLqtMeuzkWOtG2SxdtrnuehrSc9utyBpwjwB5sp23eqdI33Og5Wm6IZan3eXKz/wcc8UYdl87ZOsrUtDZmzz6xIwoU9nB2CHKw5FLGBWVkQXzrTsu4Fvw1K+JGRWmjoPiTjto6eqysMeF08NFA0chRVu8jNRyzpogXpF6rF9LuSw2MVzHtnphMxRNLgj6IasdpCBNef8B+CKj53zyI5tWOqdATsP0VP7GPoYJd1QDQuuagw2f30xj9URaFF6MM8pMPSxfa7w4FmqxtTb4YgjCOVPReQRanvgKa5TGuvQ7j9+rq5QD6aNMqRa/LffKb9JvQoR6Al9XCQyrCZCIL5eX5Z4+QEscJfekj/2D7KhSDEKe9jHAAAAAElFTkSuQmCC"
                                alt="今日头条" /></a>
                        <ul>
                            <li><a class="channel-item active" href="/" target="_self">推荐</a></li>
                            <li><a class="channel-item" href="https://www.ixigua.com/" target="_blank">西瓜视频</a></li>
                            <li><a class="channel-item" href="/ch/news_hot/" target="_self">热点</a></li>
                            <li><a class="channel-item" href="https://live.ixigua.com" target="_blank">直播</a></li>
                            <li><a class="channel-item" href="/ch/news_image/" target="_self">图片</a></li>
                            <li><a class="channel-item" href="/ch/news_tech/" target="_self">科技</a></li>
                            <li><a class="channel-item" href="/ch/news_entertainment/" target="_self">娱乐</a></li>
                            <li><a class="channel-item" href="/ch/news_game/" target="_self">游戏</a></li>
                            <li><a class="channel-item" href="/ch/news_sports/" target="_self">体育</a></li>
                            <li><a class="channel-item" href="https://www.dcdapp.com/?zt=tt_pc_home_channel" target="_blank">懂车帝</a></li>
                            <li><a class="channel-item" href="/ch/news_finance/" target="_self">财经</a></li>
                            <li><a class="channel-item" href="/ch/digital/" target="_self">数码</a></li>
                            <li class="channel-more"><a class="channel-item">更多</a>
                                <div class="channel-more-layer">
                                    <ul>
                                        <li><a class="channel-item" href="/ch/news_military/" target="_self">军事</a></li>
                                        <li><a class="channel-item" href="/ch/news_world/" target="_self">国际</a></li>
                                        <li><a class="channel-item" href="/ch/news_fashion/" target="_self">时尚</a></li>
                                        <li><a class="channel-item" href="/ch/news_travel/" target="_self">旅游</a></li>
                                        <li><a class="channel-item" href="/ch/news_discovery/" target="_self">探索</a>
                                        </li>
                                        <li><a class="channel-item" href="/ch/news_baby/" target="_self">育儿</a></li>
                                        <li><a class="channel-item" href="/ch/news_regimen/" target="_self">养生</a></li>
                                        <li><a class="channel-item" href="/ch/news_essay/" target="_self">美文</a></li>
                                        <li><a class="channel-item" href="/ch/news_history/" target="_self">历史</a></li>
                                        <li><a class="channel-item" href="/ch/news_food/" target="_self">美食</a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="feed-container">
                    <div class="feedbox-wrapper">
                        
                        <div class="feed-box">
                            <div class="feed-list">
                                
                                <main className={styles.main}>
                                  {state.list.map((i) => {
                                      return (
                                        <div class="single-mode">
                                    <div class="single-mode-lbox">
                                        <a class="img-wrap" href="/group/6943156621459587614/" target="_blank" rel="noopener noreferrer"><img src={i.pic} class="lazy-load-img"/><i class="pic-tip video-tip"><span></span></i></a>
                                    </div>
                                    <div class="single-mode-rbox">
                                        <div class="single-mode-rbox-inner">
                                            <div class="title-box"><a class="link" href="/group/6943156621459587614/" target="_blank" rel="noopener noreferrer">{i.title}</a></div>
                                            <div class="footer-bar">
                                                <div class="footer-bar-left"><a class="footer-bar-action tag tag-style-video" href="/ch/video/" target="_blank" rel="noopener noreferrer">{i.kind}</a>
                                                    <a class="footer-bar-action media-avatar" target="_blank" rel="noopener noreferrer"><img src={i.footpic}  target="_blank"
                                                        rel="noopener noreferrer"/>&nbsp;{i.media}&nbsp;⋅</a>
                                                    <a class="footer-bar-action source" href="/group/6943156621459587614//#comment-area" target="_blank" rel="noopener noreferrer">&nbsp;{i.numofcomment}</a><span class="footer-bar-action time">&nbsp;⋅&nbsp;{i.time}</span></div>
                                                <div class="footer-bar-right">
                                                    <div class="action-dislike"><i class="bui-icon icon-close-small"></i>不感兴趣</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                          );
                                        })}
                                      </main>



                            </div>
                        </div>
                    </div>
                </div>
                <div class="right-container">
                    <div class="search-wrapper"><input class="search-input" placeholder="搜索站内资讯、视频或用户" value="" />
                        <div class="search-btn"><button type="button">搜索</button></div>
                    </div>
                    <div class="login-wrapper">
                        <div class="login inner">
                            <p class="login-msg">登录后可以保存您的浏览喜好、评论、收藏，并与APP同步，更可以发布微头条</p><a href="https://sso.toutiao.com"><button type="button"
                                    class="login-button">登录</button></a>
                            <ul class="third-login">
                                <li class="sns qq" data-pid="qzone_sns"><span>QQ</span></li>
                                <li class="sns weixin" data-pid="weixin"><span>微信</span></li>
                            </ul>
                        </div>
                    </div>
                    <div class="pane-module ">
                        <div class="module-head">更多</div>
                        <ul class="links-wrapper">
                            <li class="item"><a target="_self" href="/about/" rel="">关于头条</a></li>
                            <li class="item"><a target="_blank" href="https://job.bytedance.com" rel="noopener noreferrer">加入头条</a></li>
                            <li class="item"><a target="_self" href="/report/" rel="">媒体报道</a></li>
                            <li class="item"><a target="_self" href="/media_partners/" rel="">媒体合作</a></li>
                            <li class="item"><a target="_self" href="/cooperation/" rel="">产品合作</a></li>
                            <li class="item"><a target="_self" href="/media_cooperation/" rel="">合作说明</a></li>
                            <li class="item"><a target="_blank" href="https://www.oceanengine.com/?source=pchomemore" rel="noopener noreferrer">广告投放</a></li>
                            <li class="item"><a target="_self" href="/contact/" rel="">联系我们</a></li>
                            <li class="item"><a target="_self" href="/user_agreement/" rel="">用户协议</a></li>
                            <li class="item"><a target="_self" href="/privacy_protection/" rel="">隐私政策</a></li>
                            <li class="item"><a target="_self" href="/complain/" rel="">侵权投诉</a></li>
                            <li class="item"><a target="_self" href="/corrupt_report/" rel="">廉洁举报</a></li>
                            <li class="item"><a target="_blank" href="https://renzheng.toutiao.com/guide?platform=%27PC%27&amp;source=%27www.toutiao.com%27" rel="noopener noreferrer">企业认证</a></li>
                            <li class="item"><a target="_blank" href="https://hys.people-health.cn/m/#/pages/ncovSuff/index" rel="noopener noreferrer">肺炎求助</a></li>
                            <li class="item"><a target="_blank" href="http://www.piyao.org.cn/2020yqpy" rel="noopener noreferrer">辟谣专区</a></li>
                        </ul>
                    </div>
                    <div class="pane-module ">
                        <div class="module-head">友情链接</div>
                        <ul class="links-wrapper">
                            <li class="item"><a target="_blank" href="https://www.gmw.cn/" rel="noopener noreferrer">光明网</a></li>
                            <li class="item"><a target="_blank" href="https://www.cnr.cn/" rel="noopener noreferrer">央广网</a></li>
                            <li class="item"><a target="_blank" href="http://www.cri.cn" rel="noopener noreferrer">国际在线</a></li>
                            <li class="item"><a target="_blank" href="http://www.tibet.cn/" rel="noopener noreferrer">中国西藏网</a></li>
                            <li class="item"><a target="_blank" href="https://www.cankaoxiaoxi.com/" rel="noopener noreferrer">参考消息</a></li>
                            <li class="item"><a target="_blank" href="https://www.huanqiu.com/" rel="noopener noreferrer">环球网</a></li>
                            <li class="item"><a target="_blank" href="http://www.cyol.com" rel="noopener noreferrer">中青在线</a></li>
                            <li class="item"><a target="_blank" href="https://www.youth.cn/" rel="noopener noreferrer">中青网</a></li>
                            <li class="item"><a target="_blank" href="http://www.workercn.cn/" rel="noopener noreferrer">中工网</a></li>
                            <li class="item"><a target="_blank" href="https://www.haiwainet.cn/" rel="noopener noreferrer">海外网</a></li>
                            <li class="item"><a target="_blank" href="http://h5.china.com.cn" rel="noopener noreferrer">中国网</a></li>
                            <li class="item"><a target="_blank" href="https://www.k618.cn/" rel="noopener noreferrer">未来网</a></li>
                            <li class="item"><a target="_blank" href="http://qianlong.com/" rel="noopener noreferrer">千龙网</a></li>
                            <li class="item"><a target="_blank" href="http://www.bjnews.com.cn/" rel="noopener noreferrer">新京报</a></li>
                            <li class="item"><a target="_blank" href="https://www.ynet.com/" rel="noopener noreferrer">北青网</a></li>
                            <li class="item"><a target="_blank" href="http://www.fawan.com/" rel="noopener noreferrer">法制晚报</a></li>
                            <li class="item"><a target="_blank" href="http://www.morningpost.com.cn" rel="noopener noreferrer">北京晨报</a></li>
                            <li class="item"><a target="_blank" href="http://www.bbtnews.com.cn/" rel="noopener noreferrer">北京商报</a></li>
                            <li class="item"><a target="_blank" href="http://www.stardaily.com.cn/" rel="noopener noreferrer">北京娱乐信报</a></li>
                            <li class="item"><a target="_blank" href="https://www.oeeee.com/" rel="noopener noreferrer">奥一网</a></li>
                            <li class="item"><a target="_blank" href="https://www.ycwb.com/" rel="noopener noreferrer">金羊网</a></li>
                            <li class="item"><a target="_blank" href="http://www.hsw.cn/" rel="noopener noreferrer">华商网</a></li>
                            <li class="item"><a target="_blank" href="https://www.xinmin.cn" rel="noopener noreferrer">新民网</a></li>
                            <li class="item"><a target="_blank" href="https://www.rednet.cn/index.html" rel="noopener noreferrer">红网</a></li>
                            <li class="item"><a target="_blank" href="https://www.jschina.com.cn" rel="noopener noreferrer">中国江苏网</a></li>
                            <li class="item"><a target="_blank" href="https://www.jxnews.com.cn/" rel="noopener noreferrer">中国江西网</a></li>
                            <li class="item"><a target="_blank" href="http://www.iqilu.com/" rel="noopener noreferrer">齐鲁网</a></li>
                            <li class="item"><a target="_blank" href="https://www.hinews.cn/news/" rel="noopener noreferrer">南海网</a></li>
                            <li class="item"><a target="_blank" href="http://www.ahwang.cn/" rel="noopener noreferrer">安徽网</a></li>
                            <li class="item"><a target="_blank" href="http://www.hebnews.cn/" rel="noopener noreferrer">河北新闻网</a></li>
                            <li class="item"><a target="_blank" href="http://www.mnw.cn/" rel="noopener noreferrer">闽南网</a></li>
                            <li class="item"><a target="_blank" href="https://www.hxnews.com/" rel="noopener noreferrer">海峡网</a></li>
                            <li class="item"><a target="_blank" href="https://www.voc.com.cn/" rel="noopener noreferrer">华声在线</a></li>
                            <li class="item"><a target="_blank" href="https://tv.cztv.com" rel="noopener noreferrer">中国蓝TV</a></li>
                            <li class="item"><a target="_blank" href="http://www.lnd.com.cn/" rel="noopener noreferrer">北国网</a></li>
                            <li class="item"><a target="_blank" href="http://www.longhoo.net/" rel="noopener noreferrer">龙虎网</a></li>
                            <li class="item"><a target="_blank" href="https://www.timedg.com/" rel="noopener noreferrer">东莞时间网</a></li>
                            <li class="item"><a target="_blank" href="https://www.dcdapp.com/?zt=tt_pc_friendly_link" rel="noopener noreferrer">懂车帝</a></li>
                            <li class="item"><a target="_blank" href="https://www.autohome.com.cn/" rel="noopener noreferrer">汽车之家</a></li>
                            <li class="item"><a target="_blank" href="http://www.onlylady.com/" rel="noopener noreferrer">Onlylady女人志</a></li>
                            <li class="item"><a target="_blank" href="https://123.chinaso.com/" rel="noopener noreferrer">中国搜索</a></li>
                            <li class="item"><a target="_blank" href="https://www.nbd.com.cn/" rel="noopener noreferrer">每日经济新闻</a></li>
                            <li class="item"><a target="_blank" href="https://www.cheshi.com/" rel="noopener noreferrer">网上车市</a></li>
                            <li class="item"><a target="_blank" href="https://www.news18a.com/" rel="noopener noreferrer">网通社汽车</a></li>
                            <li class="item"><a target="_blank" href="http://www.enorth.com.cn/" rel="noopener noreferrer">北方网</a></li>
                            <li class="item"><a target="_blank" href="http://www.hnt.gov.cn/" rel="noopener noreferrer">湖南省旅发委官网</a></li>
                            <li class="item"><a target="_blank" href="https://www.leju.com/" rel="noopener noreferrer">乐居网</a></li>
                            <li class="item"><a target="_blank" href="http://www.rmlt.com.cn/" rel="noopener noreferrer">人民论坛网</a></li>
                            <li class="item"><a target="_blank" href="http://www.cfbond.com/" rel="noopener noreferrer">中国财富网</a></li>
                        </ul>
                    </div>
                    <div class="company-wrapper">
                        
                        <p>
                            <a href="http://www.shdf.gov.cn/shdf/channels/740.html" target="_blank" rel="noopener noreferrer"><img src="data:image/jpeg;base64,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"
                                /> 扫黄打非网上举报
                            </a>
                        </p>
                        <p><a href="http://www.piyao.org.cn/yybgt/index.htm" target="_blank" rel="noopener noreferrer">网络谣言曝光台</a></p><a href="//www.12377.cn/" target="_blank" rel="noopener noreferrer">中国互联网举报中心</a><a href="//tsm.miit.gov.cn/dxxzsp/" target="_blank"
                            rel="noopener noreferrer"> 京ICP证140141号</a>
                        <div><a href="//beian.miit.gov.cn" target="_blank" rel="noopener noreferrer">京ICP备12025439号-3</a><a href="/license/" class="icp" target="_blank" rel="noopener noreferrer"> 网络文化经营许可证</a></div><a href="/business_license/" target="_blank"
                            rel="noopener noreferrer">营业执照</a>
                        <p>京-非经营性-2016-0081</p>
                        <p>互联网药品信息服务资格证书</p>
                        <p><a href="/a3642705768/" target="_blank" rel="noopener noreferrer">跟帖评论自律管理承诺书</a></p>
                        <span>违法和不良信息举报：400-140-2108</span><span>举报邮箱：jubao@toutiao.com</span><span>公司名称：北京字节跳动科技有限公司</span>
                        <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11000002002023" target="_blank" rel="noopener noreferrer"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAABvFBMVEVHcEz25qTk0JXnxWXs04vktmTlzXP89t337Lr+/OD69M3eqFf53I316pzu46vu3H/Yrn3owH7UrFrftWjx166xkHz7x2fcrGrgvovz6ZLcp1nkvFnTk3DZr4LKhFvDfz7jrFPnvGzbnFHoxnz/+dDqw3r/74bktoCaaVyfaFXRrnbqvlkABHjVHhjWPCEFAWQBAW3qxmDmv1HvzGPw1nHkslTuy2zdm0T/1FXWAgjNAALcSSbWZDTquVDuyVnmuFjfo0rrsEnluF3VkkPdkkbUh0D8xVS5kVp2eX//3WDklTjUxXVreYnrXyPtgjvqcDLEun+Ujn3143PpwWDjrVPTLhw5FDjVdC/yoEHjrUqTeFpRNlHdhTXDEgpZVnPJJxNkEUPREg7MPSfYVi7URCj9LA/acTi7ABA8H0h7ipcAEpBzY2EZN5D2qjy7TCYAAID9vUbuvlDWjjzzfCjYnlj8jizXkVOsonP/723twmKTYDa0o2aptJHJWSr/vmBODk6NhnfFUiReWWbGPh1MADmxDg770m//0maBWDqEaUrEazOeXzCjfVKnjVm1gD/TvIfFrnz8zGSjmYTOeDoOTxX1AAAAK3RSTlMAKgLukeT5HEEIW8a2PIDnrMb6/GnOwuCcq+v0FEhdnOS80vtM5r6x+/dvgk6cRwAAAWVJREFUGNNjYIAAdhFRURF2BmTAIaDZ3dHZoyGgghDjdA+r6vL1Fy4Pc+eEibGLRUcVW+pZW0XURPNARRmFM5pKdXVDrRNj63wyVBnBgryB+b2+lqG6iXpWvgEGDYwQzYE6fdaWunp6ulZ63gYeaiA3aOVOynf3s6p1NnJJ9Pc2CLTgAwpKeE3Iyi7Ia7ZJS3P1zNYJyJUACorHmOUY5PmlJNmk+Nvo55h4iQMFhSYXZOqkp9o0hvulphv4uLmyAgXVzSf2Z7W0xsbHWycl6AS0mbIABQVdQtozdfT16xP09XU8PJ0iBYGCyiVlXmbeUT7VQnFxHpUR5pH8QEEuIwfncDdPCzdHiwqLGGdTOw6Q67mYjVyLjLVNtY1NzF3MmDkg4cZqaGivbRhsrO1gbxIsxQsW5AkycTLVDgm2NXewdzILkoSEJou0rV2ho62jtp2RIT8fEzRAZeTkuZUUWLkVWWTBQgDxBU8MyWNkzgAAAABJRU5ErkJggg=="
                            /> 京公网安备 11000002002023号</a>
                    </div>
                </div>
            </div>
            <div class="toolbar">
                <div class="download shadow"><img src="https://sf3-dycdn-tos.pstatp.com/obj/eden-cn/pipieh7nupabozups/toutiao_web_pc/download.png" alt="" />
                    <p>扫码下载今日头条</p>
                </div>
                <ul class="tool-container shadow">
                    <li class="tool-item report-item">
                        <a href="//www.12377.cn/" target="_blank" rel="noopener noreferrer"><img src="//s3a.pstatp.com/toutiao/resource/ntoutiao_web/static/image/other/report_logo_15cc24e.png" /><span>网上有害信息举报</span></a>
                    </li>
                    <li class="tool-item"><img class="icon" src="https://sf3-dycdn-tos.pstatp.com/obj/eden-cn/pipieh7nupabozups/toutiao_web_pc/refreshicon.jpg" alt="" /></li>
                </ul>
            </div>
        </div>
    </div>
    <script type="text/javascript" src="//sf3-scmcdn-tos.pstatp.com/obj/goofy/toutiao/toutiao_web_pc/common/vendor.2fcab6ea.js"></script>
    <script type="text/javascript" src="//sf3-scmcdn-tos.pstatp.com/obj/goofy/toutiao/toutiao_web_pc/pages/index/index.12481c17.js"></script>

    
    </div>
  );
}