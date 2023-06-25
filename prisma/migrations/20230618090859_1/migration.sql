-- CreateTable
CREATE TABLE `user` (
    `id` VARCHAR(100) NOT NULL,
    `nama` VARCHAR(100) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `password` VARCHAR(200) NOT NULL,
    `role` ENUM('admin', 'kasir') NOT NULL,
    `createAt` DATE NOT NULL,
    `updateAt` DATE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `barang` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama` VARCHAR(100) NOT NULL,
    `harga` INTEGER NOT NULL,
    `jumlah` INTEGER NOT NULL DEFAULT 0,
    `updateAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `transaksi` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idUser` VARCHAR(100) NOT NULL,
    `total` INTEGER NOT NULL,
    `tgl_transaksi` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `detailTransaksi` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idTransaksi` INTEGER NOT NULL,
    `idBarang` INTEGER NOT NULL,
    `totalBarang` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `detailTransaksi` ADD CONSTRAINT `detailTransaksi_idTransaksi_fkey` FOREIGN KEY (`idTransaksi`) REFERENCES `transaksi`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
