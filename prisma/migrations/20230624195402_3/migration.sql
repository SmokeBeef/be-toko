/*
  Warnings:

  - You are about to drop the column `updateAt` on the `barang` table. All the data in the column will be lost.
  - You are about to drop the column `tgl_transaksi` on the `transaksi` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `barang` DROP COLUMN `updateAt`;

-- AlterTable
ALTER TABLE `transaksi` DROP COLUMN `tgl_transaksi`;

-- AlterTable
ALTER TABLE `user` MODIFY `token` TEXT NULL;
