FROM node:20-alpine

# 安装 pnpm
RUN npm install -g pnpm@9.14.3

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# 安装依赖
RUN pnpm install --frozen-lockfile

# 复制源代码
COPY . .

ARG VITE_WALLET_CONNECT_PROJECT_ID
ENV VITE_WALLET_CONNECT_PROJECT_ID=$VITE_WALLET_CONNECT_PROJECT_ID

# 构建应用
RUN pnpm build

# 使用 nginx 作为生产环境服务器
FROM nginx:alpine
COPY --from=0 /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"] 