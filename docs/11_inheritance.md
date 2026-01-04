# 第11章：継承とポリモーフィズム  
―「共通点」と「違い」を正しく扱う ―

---

## この章のゴール 🎯

この章を終えると、次のことができるようになります。

- 継承の目的を説明できる
- `extends` の意味を理解する
- メソッドのオーバーライドができる
- ポリモーフィズム（多態性）を体感する

---

## 1. なぜ継承が必要なのか

次のコードを考えます。

```java
class Dog {
    void speak() {
        System.out.println("ワン");
    }
}

class Cat {
    void speak() {
        System.out.println("ニャー");
    }
}
```

問題点：

- 構造が同じ
- クラスが増えるほどコピペが増える

👉 **共通部分をまとめたい**

---

## 2. 継承とは何か

継承とは、**既存クラスの性質を引き継ぐこと**

```java
class Animal {
    void speak() {
        System.out.println("鳴く");
    }
}

class Dog extends Animal {
}
```

- `Animal`：親クラス（スーパークラス）
- `Dog`：子クラス（サブクラス）

---

## 3. メソッドのオーバーライド

```java
class Dog extends Animal {
    @Override
    void speak() {
        System.out.println("ワン");
    }
}
```

- 親のメソッドを上書き
- `@Override` を付けるのが推奨

---

## 4. ポリモーフィズムとは何か（重要）

```java
Animal a1 = new Dog();
Animal a2 = new Cat();

a1.speak(); // ワン
a2.speak(); // ニャー
```

- 型：`Animal`
- 実体：`Dog` / `Cat`

👉 **同じ型で違う振る舞い**

---

## 5. ポリモーフィズムの強み

```java
void makeSpeak(Animal animal) {
    animal.speak();
}
```

- クラスが増えても修正不要
- **拡張に強い設計**

---

## 6. super キーワード

```java
class Dog extends Animal {
    @Override
    void speak() {
        super.speak();
        System.out.println("ワン");
    }
}
```

- 親クラスの処理を呼び出す

---

## 7. 継承の注意点

- is-a 関係か？
- 乱用しない

👉 **次章の interface に続く**（※本教材では次章は例外処理ですが、概念的にはインターフェースと密接です）

---

## 8. ハンズオン課題

1. `Animal` クラス作成
2. `Dog` / `Cat` クラス作成
3. `List<Animal>` で `speak` を呼ぶ

---

## 9. この章のまとめ

- 継承は共通化
- `override` で振る舞い変更
- ポリモーフィズムが設計を楽にする

---

## 次章予告

次は **第12章：例外処理** です。

- エラーと例外の違い
- `try-catch` の使い方
- 落ちないプログラムを作る

を扱います。

