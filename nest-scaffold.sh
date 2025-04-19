#!/bin/bash

# Usage: ./nest-scaffold.sh moduleName

MODULE=$1

if [ -z "$MODULE" ]; then
  echo "❌ Please provide a module name. Example:"
  echo "./nest-scaffold.sh users"
  exit 1
fi

echo "🚀 Generating NestJS module: $MODULE..."

# Generate base NestJS structure
nest g module $MODULE
nest g service $MODULE
nest g controller $MODULE

# Create folders
mkdir -p src/$MODULE/entities
mkdir -p src/$MODULE/dto

# Create entity and DTO files with placeholders
touch src/$MODULE/entities/$MODULE.entity.ts
touch src/$MODULE/dto/create-$MODULE.dto.ts
touch src/$MODULE/dto/update-$MODULE.dto.ts

# Add placeholder content
echo "// TODO: define $MODULE.entity.ts" >> src/$MODULE/entities/$MODULE.entity.ts
echo "// TODO: define create-$MODULE.dto.ts" >> src/$MODULE/dto/create-$MODULE.dto.ts
echo "// TODO: define update-$MODULE.dto.ts" >> src/$MODULE/dto/update-$MODULE.dto.ts

echo "✅ $MODULE module scaffold created successfully!"