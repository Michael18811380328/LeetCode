const fs = require('fs');
const path = require('path');

// 定义目录路径
const SRC_DIR = path.join(__dirname, '../src');
const TEST_DIR = path.join(__dirname, '../test');

// 获取所有函数文件（排除非算法文件）
function getFunctionFiles() {
    try {
        const files = fs.readdirSync(SRC_DIR);
        // 过滤出以数字开头的算法文件（如0001-two-sum.js）
        return files.filter(file => {
            // 匹配以4位数字开头的文件
            return /^\d{4}-.+\.js$/.test(file);
        }).sort();
    } catch (error) {
        console.error('读取src目录出错:', error);
        return [];
    }
}

// 获取所有测试文件
function getTestFiles() {
    try {
        const files = fs.readdirSync(TEST_DIR);
        // 过滤出以数字开头的测试文件（如0001-two-sum.test.js）
        return files.filter(file => {
            // 匹配以4位数字开头且以.test.js结尾的文件
            return /^\d{4}-.+\.test\.js$/.test(file);
        }).sort();
    } catch (error) {
        console.error('读取test目录出错:', error);
        return [];
    }
}

// 提取文件的基本名称（去掉扩展名）
function getBaseName(filename) {
    return filename.replace(/\.js$/, '').replace(/\.test$/, '');
}

// 主函数
function checkMissingTests() {
    console.log('🚀 开始检查缺失的单元测试...\n');
    
    const functionFiles = getFunctionFiles();
    const testFiles = getTestFiles();
    
    console.log(`📁 函数文件总数: ${functionFiles.length}`);
    console.log(`🧪 测试文件总数: ${testFiles.length}`);
    console.log('─'.repeat(50));
    
    // 创建函数文件名称集合
    const functionFileSet = new Set(functionFiles.map(getBaseName));
    const testFileSet = new Set(testFiles.map(getBaseName));
    
    // 找出有函数文件但没有测试文件的
    const missingTests = [];
    for (const funcFile of functionFiles) {
        const baseName = getBaseName(funcFile);
        if (!testFileSet.has(baseName)) {
            missingTests.push(funcFile);
        }
    }
    
    // 找出有测试文件但没有函数文件的（可能已删除的函数文件）
    const orphanTests = [];
    for (const testFile of testFiles) {
        const baseName = getBaseName(testFile);
        if (!functionFileSet.has(baseName)) {
            orphanTests.push(testFile);
        }
    }
    
    // 输出结果
    if (missingTests.length > 0) {
        console.log('❌ 缺少单元测试的函数文件:');
        missingTests.forEach(file => {
            console.log(`   📄 ${file}`);
            // 显示对应的测试文件应该叫什么
            const testFileName = file.replace('.js', '.test.js');
            console.log(`   🧪 应该创建: ${testFileName}`);
            console.log();
        });
    } else {
        console.log('✅ 所有函数文件都有对应的单元测试！');
    }
    
    console.log('─'.repeat(50));
    
    if (orphanTests.length > 0) {
        console.log('⚠️  孤立的测试文件（可能对应的函数文件已删除）:');
        orphanTests.forEach(file => {
            console.log(`   📄 ${file}`);
        });
    } else {
        console.log('✅ 没有孤立的测试文件');
    }
    
    console.log('─'.repeat(50));
    
    // 统计信息
    const coverageRate = ((testFiles.length / functionFiles.length) * 100).toFixed(2);
    console.log(`📊 测试覆盖率: ${coverageRate}% (${testFiles.length}/${functionFiles.length})`);
    
    if (missingTests.length > 0) {
        console.log(`\n💡 建议: 为 ${missingTests.length} 个函数文件创建单元测试`);
    }
}

// 运行检查
checkMissingTests();
