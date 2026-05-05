import * as Dialog from '@radix-ui/react-dialog';
import * as Separator from '@radix-ui/react-separator';
import * as Switch from '@radix-ui/react-switch';
import * as Tooltip from '@radix-ui/react-tooltip';
import type { ReactElement, SVGProps } from 'react';

interface SettingsDialogProps {
  collapsed: boolean;
}

function SettingsDialog({ collapsed }: SettingsDialogProps) {
  const trigger = (
    <Dialog.Trigger asChild>
      <button type="button" className="settings-trigger" aria-label="打开设置">
        <span className="nav-icon" aria-hidden="true">
          <GearIcon />
        </span>
        <span className="settings-copy">
          <strong>设置</strong>
          <small>模型服务与工作区</small>
        </span>
      </button>
    </Dialog.Trigger>
  );

  return (
    <Dialog.Root>
      {collapsed ? wrapTooltip('设置', trigger) : trigger}

      <Dialog.Portal>
        <Dialog.Overlay className="dialog-overlay" />
        <Dialog.Content className="settings-dialog">
          <div className="dialog-header">
            <div>
              <Dialog.Title>客户端设置</Dialog.Title>
              <Dialog.Description>
                这里先保留独立客户端所需的基础设置入口，后续业务接入时在此扩展。
              </Dialog.Description>
            </div>
            <Dialog.Close className="dialog-close" aria-label="关闭设置">
              <CloseIcon />
            </Dialog.Close>
          </div>

          <Separator.Root className="dialog-separator" />

          <div className="settings-grid">
            <section className="settings-section">
              <h3>模型服务</h3>
              <label>
                <span>服务地址</span>
                <input type="text" placeholder="例如 https://api.example.com/v1" />
              </label>
              <label>
                <span>默认模型</span>
                <input type="text" placeholder="请输入模型名称" />
              </label>
            </section>

            <section className="settings-section">
              <h3>工作区</h3>
              <div className="setting-row">
                <div>
                  <strong>自动保存草稿</strong>
                  <span>在本地客户端保存编辑进度。</span>
                </div>
                <Switch.Root className="switch-root" defaultChecked aria-label="自动保存草稿">
                  <Switch.Thumb className="switch-thumb" />
                </Switch.Root>
              </div>
              <div className="setting-row">
                <div>
                  <strong>严格审查模式</strong>
                  <span>检查废标风险时优先提示硬性条款。</span>
                </div>
                <Switch.Root className="switch-root" aria-label="严格审查模式">
                  <Switch.Thumb className="switch-thumb" />
                </Switch.Root>
              </div>
            </section>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function wrapTooltip(label: string, child: ReactElement) {
  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>{child}</Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Content className="tooltip-content" side="right" align="center" sideOffset={12}>
          {label}
          <Tooltip.Arrow className="tooltip-arrow" />
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip.Root>
  );
}

function GearIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M12 8.2a3.8 3.8 0 1 0 0 7.6 3.8 3.8 0 0 0 0-7.6Z" />
      <path d="m19.1 13.5.1-1.5-.1-1.5 2-1.5-2-3.4-2.45.95a8.2 8.2 0 0 0-2.55-1.45L13.75 2h-3.5L9.9 5.1a8.2 8.2 0 0 0-2.55 1.45L4.9 5.6l-2 3.4 2 1.5L4.8 12l.1 1.5-2 1.5 2 3.4 2.45-.95A8.2 8.2 0 0 0 9.9 18.9l.35 3.1h3.5l.35-3.1a8.2 8.2 0 0 0 2.55-1.45l2.45.95 2-3.4z" />
    </svg>
  );
}

function CloseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="m6 6 12 12" />
      <path d="M18 6 6 18" />
    </svg>
  );
}

export default SettingsDialog;
