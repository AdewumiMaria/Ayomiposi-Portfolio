import { IoIosArrowRoundForward } from "react-icons/io";
import { TiDocumentText } from "react-icons/ti";
import { MdTerminal } from "react-icons/md";
import { HiOutlineBeaker } from "react-icons/hi2";
import { BsAirplaneEngines } from "react-icons/bs";
const LabBox = () => {
  return (
    <section className="bg-[#fcf9f8] font-[Geist]">
      <div className="w-[90%] mx-auto pb-5">
        {/* boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-3">
          {/* first */}
          <div className="bg-white border border-[#EAEAEA] p-4 sm:p-3 md:p-6 flex flex-col gap-3">
            {/* heading */}
            <div className="flex justify-between items-center">
              <p className="text-xl sm:text-[22px] md:text-2xl">
                {" "}
                DistroDB_Node
              </p>
              <button className="bg-[#F0EDED] border-none py-2 px-1 sm:px-3 rounded text-[9px] sm:text-xs md:text-[10px] lg:text-xs text-[#414754]">
                V1.0 Alpha
              </button>
            </div>
            <p className="text-[#414754] text-sm sm:text-xs md:text-sm">
              A distributed key-value store built to experiment with Raft
              consensus and LSM-tree storage engines. Features partitioned
              replication and strong consistency guarantees under high network
              partitions.
            </p>
            {/* button */}
            <div className="flex gap-2 items-center my-2">
              <button className="bg-[#F0EDED] border-none py-2 px-1 sm:px-3 rounded text-[9px] sm:text-xs md:text-[10px] lg:text-xs text-[#414754]">
                GO
              </button>
              <button className="bg-[#F0EDED] border-none py-2 px-1 sm:px-3 rounded text-[9px] sm:text-xs md:text-[10px] lg:text-xs text-[#414754]">
                GRPC
              </button>
              <button className="bg-[#F0EDED] border-none py-2 px-1 sm:px-3 rounded text-[9px] sm:text-xs md:text-[10px] lg:text-xs text-[#414754]">
                PROTOBUF
              </button>
            </div>
            {/* line */}
            <div className="border-t border-[#C1C6D7]"></div>

            <p className="text-[#0058C3] flex gap-1 items-center text-sm">
              View Experiment{" "}
              <span className="text-base">
                <IoIosArrowRoundForward />
              </span>
            </p>
          </div>
          {/* second */}
          <div className="bg-white border border-[#EAEAEA] p-4 sm:p-3 md:p-6 flex flex-col gap-3">
            {/* heading */}
            <div className="flex justify-between items-center">
              <p className="text-xl sm:text-[22px] md:text-2xl">
                {" "}
                CloudScale_Auth
              </p>
              <button className="bg-[#7AF4DD] border border-[#006B5D] py-2 px-1 sm:px-3 rounded text-[9px] sm:text-xs md:text-[10px] lg:text-xs text-[#006F61]">
                Experimental
              </button>
            </div>
            <p className="text-[#414754] text-sm sm:text-xs md:text-sm">
              Edge-native authentication middleware utilizing WebAssembly for
              sub-millisecond JWT verification and request filtering. Implements
              zero-trust principles at the CDN layer.
            </p>
            {/* button */}
            <div className="flex gap-2 items-center my-2">
              <button className="bg-[#F0EDED] border-none py-2 px-1 sm:px-3 rounded text-[9px] sm:text-xs md:text-[10px] lg:text-xs text-[#414754]">
                RUST
              </button>
              <button className="bg-[#F0EDED] border-none py-2 px-1 sm:px-3 rounded text-[9px] sm:text-xs md:text-[10px] lg:text-xs text-[#414754]">
                WASM
              </button>
              <button className="bg-[#F0EDED] border-none py-2 px-1 sm:px-3 rounded text-[9px] sm:text-xs md:text-[10px] lg:text-xs text-[#414754]">
                CLOUDFLARE WORKERS
              </button>
            </div>
            {/* line */}
            <div className="border-t border-[#C1C6D7]"></div>

            <p className="text-[#0058C3] flex gap-1 items-center text-sm">
              Read Write-up
              <span className="text-base">
                <TiDocumentText />
              </span>
            </p>
          </div>
          {/* third */}
          <div className="bg-white border border-[#EAEAEA] p-4 sm:p-3 md:p-6 flex flex-col gap-3">
            {/* heading */}
            <div className="flex justify-between items-center">
              <p className="text-xl sm:text-[22px] md:text-2xl">
                QuantUM_Stream
              </p>
              <button className="bg-[#FFDBCD] border border-[#A23D00] py-2 px-1 sm:px-3 rounded text-[9px] sm:text-xs md:text-[10px] lg:text-xs text-[#7D2D00]">
                In Progress
              </button>
            </div>
            <p className="text-[#414754] text-sm sm:text-xs md:text-sm">
              Real-time telemetry stream processor designed for high-frequency
              trading data. Architecture utilizes zero-copy memory buffers and
              SIMD- optimized serialization for ultra-low latency.
            </p>
            {/* button */}
            <div className="flex gap-2 items-center my-2">
              <button className="bg-[#F0EDED] border-none py-2 px-1 sm:px-3 rounded text-[9px] sm:text-xs md:text-[10px] lg:text-xs text-[#414754]">
                C++20
              </button>
              <button className="bg-[#F0EDED] border-none py-2 px-1 sm:px-3 rounded text-[9px] sm:text-xs md:text-[10px] lg:text-xs text-[#414754]">
                ZEROMQ
              </button>
              <button className="bg-[#F0EDED] border-none py-2 px-1 sm:px-3 rounded text-[9px] sm:text-xs md:text-[10px] lg:text-xs text-[#414754]">
                SIMD
              </button>
            </div>
            {/* line */}
            <div className="border-t border-[#C1C6D7]"></div>

            <p className="text-[#0058C3] flex gap-1 items-center text-sm">
              View Experiment
              <span className="text-base">
                <MdTerminal />
              </span>
            </p>
          </div>
          {/* forth */}
          <div className="bg-white border border-[#EAEAEA] p-4 sm:p-3 md:p-6 flex flex-col gap-3">
            {/* heading */}
            <div className="flex justify-between items-center">
              <p className="text-xl sm:text-[22px] md:text-2xl">
                HyperKernel_FS
              </p>
              <button className="bg-[#F0EDED] border-none py-2 px-1 sm:px-3 rounded text-[9px] sm:text-xs md:text-[10px] lg:text-xs text-[#414754]">
                V1.0 Alpha
              </button>
            </div>
            <p className="text-[#414754] text-sm sm:text-xs md:text-sm">
              Userspace file system (FUSE) implementation focused on immutable
              data structures for point- in-time snapshots and cryptographic
              verification of block integrity.
            </p>
            {/* button */}
            <div className="flex gap-2 items-center my-2">
              <button className="bg-[#F0EDED] border-none py-2 px-1 sm:px-3 rounded text-[9px] sm:text-xs md:text-[10px] lg:text-xs text-[#414754]">
                RUST
              </button>
              <button className="bg-[#F0EDED] border-none py-2 px-1 sm:px-3 rounded text-[9px] sm:text-xs md:text-[10px] lg:text-xs text-[#414754]">
                FUSE
              </button>
              <button className="bg-[#F0EDED] border-none py-2 px-1 sm:px-3 rounded text-[9px] sm:text-xs md:text-[10px] lg:text-xs text-[#414754]">
                CRYPTOGRAPHY
              </button>
            </div>
            {/* line */}
            <div className="border-t border-[#C1C6D7]"></div>

            <p className="text-[#0058C3] flex gap-1 items-center text-sm">
              Read Writeup
              <span className="text-base">
                <TiDocumentText />
              </span>
            </p>
          </div>
          {/* fifth */}
          <div className="bg-white border border-[#EAEAEA] p-4 sm:p-3 md:p-6 flex flex-col gap-3">
            {/* heading */}
            <div className="flex justify-between items-center">
              <p className="text-xl sm:text-[22px] md:text-2xl">Orchestra_CI</p>
              <button className="bg-[#7AF4DD] border border-[#006B5D] py-2 px-1 sm:px-3 rounded text-[9px] sm:text-xs md:text-[10px] lg:text-xs text-[#006F61]">
                Experimental
              </button>
            </div>
            <p className="text-[#414754] text-sm sm:text-xs md:text-sm">
              A lightweight container orchestration engine tailored for
              ephemeral CI/CD workloads. Focuses on rapid startup times and
              minimal resource overhead compared to Kubernetes.
            </p>
            {/* button */}
            <div className="flex gap-2 items-center my-2">
              <button className="bg-[#F0EDED] border-none py-2 px-1 sm:px-3 rounded text-[9px] sm:text-xs md:text-[10px] lg:text-xs text-[#414754]">
                GO
              </button>
              <button className="bg-[#F0EDED] border-none py-2 px-1 sm:px-3 rounded text-[9px] sm:text-xs md:text-[10px] lg:text-xs text-[#414754]">
                DOCKER API
              </button>
              <button className="bg-[#F0EDED] border-none py-2 px-1 sm:px-3 rounded text-[9px] sm:text-xs md:text-[10px] lg:text-xs text-[#414754]">
                REDIS
              </button>
            </div>
            {/* line */}
            <div className="border-t border-[#C1C6D7]"></div>

            <p className="text-[#0058C3] flex gap-1 items-center text-sm font-medium">
              View Experiment
              <span className="text-base rotate-45">
                <BsAirplaneEngines />
              </span>
            </p>
          </div>
          {/* Sixth */}
          <div className="bg-white border border-[#EAEAEA] p-4 sm:p-3 md:p-6 flex flex-col gap-3">
            {/* heading */}
            <div className="flex justify-between items-center">
              <p className="text-xl sm:text-[22px] md:text-2xl">
                NeuralPath_v2
              </p>
              <button className="bg-[#FFDBCD] border border-[#A23D00] py-2 px-1 sm:px-3 rounded text-[9px] sm:text-xs md:text-[10px] lg:text-xs text-[#7D2D00]">
                In Progress
              </button>
            </div>
            <p className="text-[#414754] text-sm sm:text-xs md:text-sm">
              Custom graph neural network implementation for predicting network
              topology failures. Researching the balance between model accuracy
              and inference speed on edge hardware.
            </p>
            {/* button */}
            <div className="flex gap-2 items-center my-2">
              <button className="bg-[#F0EDED] border-none py-2 px-1 sm:px-3 rounded text-[9px] sm:text-xs md:text-[10px] lg:text-xs text-[#414754]">
                PYTHON
              </button>
              <button className="bg-[#F0EDED] border-none py-2 px-1 sm:px-3 rounded text-[9px] sm:text-xs md:text-[10px] lg:text-xs text-[#414754]">
                PYTORCH
              </button>
              <button className="bg-[#F0EDED] border-none py-2 px-1 sm:px-3 rounded text-[9px] sm:text-xs md:text-[10px] lg:text-xs text-[#414754]">
                ONNX
              </button>
            </div>
            {/* line */}
            <div className="border-t border-[#C1C6D7]"></div>

            <p className="text-[#0058C3] flex gap-1 items-center text-sm">
              View Research
              <span className="text-base">
                <HiOutlineBeaker />
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default LabBox;
