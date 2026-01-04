# 第8章：配列とコレクション  
―「複数のデータ」を正しく扱う ―

---

## この章のゴール 🎯

この章を終えると、次のことができるようになります。

- 配列の基本を理解できる
- 配列の限界を説明できる
- `List`（コレクション）を使える
- `for`文と組み合わせて処理できる

---

## 1. なぜ「複数の値」を扱うのか

今まで：

```java
int a = 10;
int b = 20;
int c = 30;
```

問題点：

- 数が増えると管理不能
- 動的に増減できない

👉 **「まとめて扱う」必要がある**

---

## 2. 配列とは何か

配列とは、**同じ型の値を並べて管理する仕組み**

```java
int[] numbers = new int[3];
```

- 要素数は固定
- インデックスは `0` から始まる

---

## 3. 配列の操作

### 代入

```java
numbers[0] = 10;
numbers[1] = 20;
numbers[2] = 30;
```

### 取得

```java
System.out.println(numbers[1]); // 20
```

---

## 4. 配列の注意点

```java
numbers[3] = 40; // 実行時エラー
```

- 範囲外アクセスは例外
- **サイズ変更不可**

👉 **これが配列の限界**

---

## 5. for文と配列

```java
for (int i = 0; i < numbers.length; i++) {
    System.out.println(numbers[i]);
}
```

- `length` はプロパティ
- ハードコードしない

---

## 6. 拡張for文（for-each）

```java
for (int n : numbers) {
    System.out.println(n);
}
```

- 読みやすい
- インデックス不要

---

## 7. コレクションとは何か

**サイズが可変なデータ構造**

よく使うのは：

- `List`：順序あり
- `Set`：重複なし
- `Map`：キーと値

---

## 8. List を使ってみる

```java
import java.util.ArrayList;
import java.util.List;

List<String> names = new ArrayList<>();
names.add("Alice");
names.add("Bob");
```

### 取得

```java
System.out.println(names.get(0));
```

---

## 9. 配列と List の違い

| | 配列 | List |
|---|---|---|
| サイズ | 固定 | 可変 |
| 速度 | 高速 | 柔軟 |
| 機能 | 単純 | 高機能 |

👉 **実務では List が主役**

---

## 10. ハンズオン課題

1. `int`配列を作り表示する
2. `String`の`List`を作成する
3. 合計・平均を計算する

---

## 11. この章のまとめ

- 配列は固定長
- `List`は柔軟
- 使い分けが重要

---

## 次章予告

次は **第9章：メソッド** です。

- 処理をまとめて再利用する
- 引数と戻り値の仕組み
- 「スコープ」とは何か

を扱います。

