# connec+a Console

学生団体 [connec+a](https://connecta.jp) のイベント運営管理プラットフォーム。

[![Status](https://img.shields.io/badge/status-Phase%204--%CE%B1-blue)]()
[![License](https://img.shields.io/badge/license-MIT-blue)](./LICENSE)
[![Build](https://img.shields.io/badge/build-not%20required-success)]()

## 概要

connec+a は、日本に住む外国人居住者と日本人をつなぐ学生団体です。本リポジトリは、団体のイベント運営・参加者管理・コミュニケーションを一元化する管理コンソールのソースコードです。

**特徴：単一HTMLで完結**。ビルド工程なしで GitHub Pages に置くだけで動きます。

## デモ

https://connectahubis-source.github.io/connecta-console/

## アーキテクチャGitHub Repo  --push-->  GitHub Pages (静的配信)  --fetch-->  GAS WebApp (API)
|
v
Google Spreadsheet

| レイヤ | 技術 |
|---|---|
| フロントエンド | 単一HTML + React 18 (CDN) + Babel Standalone |
| ルーティング | URL hash ベース簡易ルーター |
| チャート | Chart.js 4.4 |
| バックエンド | Google Apps Script (本リポジトリ管理外) |
| データストア | Google Spreadsheet |
| ホスティング | GitHub Pages + GAS WebApp |

## ファイル構成
connecta-console/
├─ index.html       <- フロントエンド一式 (これだけで動く)
├─ LICENSE          <- MIT
└─ README.md        <- このファイル

GAS バックエンド (Code.gs) は本リポジトリには含まれません。GAS エディタ側で管理しています。

## 実装状況

| Phase | 内容 | 状態 |
|---|---|---|
| 1新 | プロジェクト初期化・ダッシュボード | 完了 |
| 2新-A | イベント一覧、登録一覧、満足度 | 完了 |
| 2新-B | メール、ニュース、チャット、テンプレ | 完了 |
| 2新-C | 参加者、Todo、決済、部署、モバイル | 完了 |
| 2新-D | 通知、イベント作成、QR、スケジュール、Analytics、写真、団体、広告 | 完了 |
| 3新 | GitHub Pages 公開 | 完了 |
| **4新-α** | **イベント CRUD (Spreadsheet 接続)** | **完了** |
| 4新-β以降 | 参加者・Todo・通知 等の CRUD | 未着手 |
| 5新+ | 認証、業務統合、多言語、運用 | 未着手 |

全21画面の UI 実装は完了。Phase 4新-α でイベントの作成・編集・削除が Spreadsheet と連動するようになりました。

## ライセンス

[MIT License](./LICENSE)

## 関連リンク

- [connec+a 公式サイト](https://connecta.jp)
