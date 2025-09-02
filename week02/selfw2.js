// ได้โจทย์มาจาก INT141 OOP

class machine{
    constructor(os,disk){
        this.os = os;
        this.disk = disk;
    }
    getOS(){
        return this.os;
    }
    getDiskSize(){
        return this.disk;
    }
}
class computer extends machine{
    constructor(brand,os,disk){
        super(os,disk)
        this.brand = brand;
        this.vms = [];
    }
    getBrand(){
        return this.brand;
    }
    getVMDiskSize(){
        let total = 0;
        for (let vm of this.vms){
            total += vm.getDiskSize();
        }
        return total;
    }
    getVM(i){
        return this.vms[i];
    }
    addVM(vm){
        this.vms.push(vm);
    }  
}
class VM extends Machine {
  constructor(host, os, disk) {
    if (host.getDiskSize() - host.getVMDiskSize() < disk) {
      throw new Error("Not enough disk space!");
    }
    super(os, disk);
    this.host = host;
    host.addVM(this);
  }

  getHost() {
    return this.host;
  }
}
