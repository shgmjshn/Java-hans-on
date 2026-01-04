# 第15章：Stream API  
― for文を書かずに「流れ」で処理する ―

---

## この章のゴール 🎯

この章を終えると、次のことができるようになります。

- Stream API の考え方を理解する
- `map` / `filter` / `reduce` を使える
- `for`文との使い分けができる

---

## 1. 従来の for 文

```java
int sum = 0;
for (int n : numbers) {
    if (n % 2 == 0) {
        sum += n;
    }
}
```

問題：

- 目的が見えにくい
- 手続きが混ざる

---

## 2. Stream API とは

**データの流れに処理をつなげる仕組み**

```java
int sum = numbers.stream()
    .filter(n -> n % 2 == 0)
    .mapToInt(n -> n)
    .sum();
```

👉 **意図がそのまま読める**

---

## 3. Stream の構造

```java
collection.stream()
    .中間操作()
    .終端操作();
```

- 中間：`map` / `filter`
- 終端：`forEach` / `sum`

---

## 4. filter（絞り込み）

```java
numbers.stream()
    .filter(n -> n > 5)
    .forEach(System.out::println);
```

---

## 5. map（変換）

```java
names.stream()
    .map(String::toUpperCase)
    .forEach(System.out::println);
```

---

## 6. 集計（reduce / sum）

```java
int total = numbers.stream().mapToInt(n -> n).sum();
```

---

## 7. forEach の注意点

- 副作用を避ける
- 状態変更しない

---

## 8. Stream と for の使い分け

- 変換・集計 → **Stream**
- 複雑な制御 → **for**

---

## 9. ハンズオン課題

1. 偶数抽出
2. 文字列変換
3. 平均計算

---

## 10. この章のまとめ

- Stream は可読性重視
- **モダンJava必須**

---

## 次章予告

次は **第16章：ファイル入出力** です。

- ファイルを安全に読み書きする
- `try-with-resources` の仕組み
- 実務でのデータの扱い方

を扱います。

