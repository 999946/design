#!/usr/bin/env bash
read -p "以上为最终发布结果, 确认发布吗? (y/n)?" CONT
if [ "$CONT" == "y" ]; then
  node
else
  echo "终止了发布"
fi