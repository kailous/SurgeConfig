#!/bin/bash
# ------------------------------------------------------------------
# 自动组装 Surge 配置脚本
# 这个脚本会读取 SurgeTemplate.conf，并把 {{SURGE_SUB_URL}}
# 替换为环境变量中的订阅链接，最后输出为主配置文件。
# ------------------------------------------------------------------

# 1. 尝试读取环境变量 SURGE_SUB_URL
# 如果环境变量为空，则使用备用默认链接
DEFAULT_URL="https://bava8u2znaj6bdzzjnfb.wgetcloud.online/link/4e7e2580-2b86-3482-9630-6f2e01d3cbba"
URL_TO_USE="${SURGE_SUB_URL:-$DEFAULT_URL}"

TEMPLATE_FILE="SurgeTemplate.conf"
OUTPUT_FILE="Surge_Final.conf"

echo "➔ 开始拼装 Surge 配置文件..."
echo "➔ 使用的订阅链接: $URL_TO_USE"

# 2. 检查模板文件是否存在
if [ ! -f "$TEMPLATE_FILE" ]; then
    echo "❌ 错误: 找不到模板文件 $TEMPLATE_FILE!"
    exit 1
fi

# 3. 使用 sed 替换变量，注意我们使用竖线 '|' 作为分隔符，防止 http:// 里的斜杠冲突
sed "s|{{SURGE_SUB_URL}}|$URL_TO_USE|g" "$TEMPLATE_FILE" > "$OUTPUT_FILE"

echo "✅ 拼装完成！最终配置文件已保存至: $OUTPUT_FILE"
