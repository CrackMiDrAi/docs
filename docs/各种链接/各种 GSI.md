---
icon: 'fa-brands fa-google'
---
# 各种 GSI

**如果你不知道什么是 GSI，请自行[百度](https://www.baidu.com)**

## 可刷入的 GSI

理论上所有的 GSI 都是可以被刷入的，如果你需要刷入 Android 12+ 的 GSI，你大概率需要扩容 System 分区大小。详情请见 [互助文档/进阶问题/Q20](https://docs.midrai.cn/#/%E5%90%84%E7%B1%BB%E6%96%87%E6%A1%A3/%E4%BA%92%E5%8A%A9%E6%96%87%E6%A1%A3/%E8%BF%9B%E9%98%B6%E9%97%AE%E9%A2%98?id=q20%e6%88%91%e5%8f%af%e4%bb%a5%e6%89%a9%e5%ae%b9-system-%e5%88%86%e5%8c%ba%e5%90%97%ef%bc%9f)

下载:[由 phhusson 创建的 Generic System Image (GSI) list](https://github.com/phhusson/treble_experimentations/wiki/Generic-System-Image-%28GSI%29-list)

## 经过测试能够正常运行的GSI
### 不需要扩容 / Standard
Lineage OS:
* [16.0 bvN](https://sourceforge.net/projects/andyyan-gsi/files/lineage-16.x/lineage-16.0-20191017-UNOFFICIAL-treble_a64_bvN.img.xz/download)
* [17.1 bvS](https://sourceforge.net/projects/andyyan-gsi/files/lineage-17.x/lineage-17.1-20210808-UNOFFICIAL-treble_a64_bvS.img.xz/download)
* [18.1 bvS](https://sourceforge.net/projects/andyyan-gsi/files/lineage-18.x/lineage-18.1-20220715-UNOFFICIAL-a64_bvS.img.xz/download) /
[18.1 bvS VNDKLite](https://sourceforge.net/projects/andyyan-gsi/files/lineage-18.x/lineage-18.1-20220715-UNOFFICIAL-a64_bvS-vndklite.img.xz/download)
* [19.1 bvN](https://sourceforge.net/projects/andyyan-gsi/files/lineage-19.x/lineage-19.1-20231017-UNOFFICIAL-a64_bvN.img.xz/download) /
[19.1 bvN VNDKLite](https://sourceforge.net/projects/andyyan-gsi/files/lineage-19.x/lineage-19.1-20231017-UNOFFICIAL-a64_bvN-vndklite.img.xz/download) /
[19.1 bvS](https://sourceforge.net/projects/andyyan-gsi/files/lineage-19.x/lineage-19.1-20231017-UNOFFICIAL-a64_bvS.img.xz/download) /
[19.1 bvS VNDKLite](https://sourceforge.net/projects/andyyan-gsi/files/lineage-19.x/lineage-19.1-20231017-UNOFFICIAL-a64_bvS-vndklite.img.xz/download)

Havoc OS:
[Here](https://sourceforge.net/projects/havoc-os/files/a64-ab/)
### 需要扩容 / Need to Extend the "System" Partition
*所有带`Google Mobile Services`的GSI及AOSP*

## GSI 命名规则
```
{arm|a64|arm64}_{a|b}{v|o|g}{N|S}-{vndklite|secure|personal}
|               |    |      |     |
|               |    |      |     vndklite: For VNDKLite devices,
|               |    |      |               or for read-writeable /system on regular devices
|               |    |      |     secure: Superuser removed and system props spoofed,
|               |    |      |             for better chances of passing SafetyNet
|               |    |      |     personal: With personal mods, for reference
|               |    |      |
|               |    |      N: No Superuser
|               |    |      S: *Built* with PHH Superuser (app needed)
|               |    |      (Z): *Built* with eremitein's Dynamic Superuser (not offered here)
|               |    |
|               |    v: Vanilla, i.e. no GAPPS
|               |    g: With regular GAPPS
|               |    o: With Android Go GAPPS
|               |    (f): With built-in MicroG and FLOSS replacements of GAPPS (not offered here)
|               |
|               a: "A-only", i.e. system-as-system (deprecated since Android 12)
|               b: "AB", i.e. system-as-root
|
arm: ARM 32-bit (deprecated since Android 12)
a64: ARM 32-bit with 64-bit binder
arm64: ARM 64-bit
```

<!-- ## 未测试的GSI
AOSP 14
    [Vanilla](https://github.com/TrebleDroid/treble_experimentations/releases/download/ci-20231220/system-td-arm64-ab-vanilla.img.xz)
    [VNDKLite](https://github.com/TrebleDroid/treble_experimentations/releases/download/ci-20231220/system-td-arm64-ab-vndklite-vanilla.img.xz) -->
